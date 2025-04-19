const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');

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

      // Generamos el token JWT
      const token = jwt.sign({ id: user.id }, 'SECRET_KEY', { expiresIn: '1h' });

      // Respondemos con el token generado
      res.json({ token });
    });
  });
};
