const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const db = require('../config/db');

exports.login = (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM empleados WHERE username = ?', [username], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    if (results.length === 0) {
      return res.status(400).json({ message: 'Usuario no encontrado' });
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, match) => {
      if (!match) return res.status(401).json({ message: 'Contraseña incorrecta' });

      const token = jwt.sign({ id: user.id }, 'SECRET_KEY', { expiresIn: '1h' });
      res.json({ token });
    });
  });
};
