const bcrypt = require('bcryptjs');
const db = require('../config/db');
const crypto = require('crypto'); // Para generar un token único y seguro

exports.login = (req, res) => {
  const { username, password } = req.body;

  // Consultamos la base de datos para obtener el usuario
  db.query('SELECT * FROM usuarios WHERE nombre_usuario = ?', [username], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const user = results[0];

    // Comparamos la contraseña proporcionada con la que está en la base de datos (usando bcrypt)
    bcrypt.compare(password, user.contrasena, (err, match) => {
      if (err) return res.status(500).json({ error: err.message });

      if (!match) return res.status(401).json({ message: 'Contraseña incorrecta' });

      // Generamos un token único para la sesión (no JWT)
      const sessionToken = crypto.randomBytes(64).toString('hex');

      // Guardamos el token de sesión en la base de datos
      db.query('INSERT INTO sesiones (user_id, token) VALUES (?, ?)', [user.id, sessionToken], (err) => {
        if (err) return res.status(500).json({ error: err.message });

        // Respondemos con el token de sesión
        res.json({ message: 'Sesión iniciada correctamente', sessionToken });
      });
    });
  });
};

exports.logout = (req, res) => {
  const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

  if (!token) {
    return res.status(400).json({ message: 'Token no proporcionado' });
  }

  // Eliminamos el token de la base de datos
  db.query('DELETE FROM sesiones WHERE token = ?', [token], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Sesión no encontrada o ya cerrada' });
    }

    res.json({ message: 'Sesión cerrada exitosamente' });
  });
};
