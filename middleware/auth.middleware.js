const db = require('../config/db');

module.exports = (req, res, next) => {
  // Obtenemos el token de sesión de los headers
  const sessionToken = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

  if (!sessionToken) {
    return res.status(403).json({ message: 'Token de sesión no proporcionado' });
  }

  // Consultamos la base de datos para verificar si el token de sesión es válido
  db.query('SELECT * FROM sesiones WHERE token = ?', [sessionToken], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    // Si no se encuentra la sesión en la base de datos
    if (results.length === 0) {
      return res.status(401).json({ message: 'Token de sesión inválido o caducado' });
    }

    // Si la sesión es válida, pasamos al siguiente middleware o controlador
    req.userId = results[0].user_id; // Guardamos el ID del usuario asociado a la sesión
    next();
  });
};
