const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  // Obtenemos el token de la cabecera 'Authorization'
  const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Token no proporcionado' });
  }

  // Verificar el token
  jwt.verify(token, 'SECRET_KEY', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    req.userId = decoded.id;  // Decodificamos el token y guardamos el id del usuario
    next();
  });
};
