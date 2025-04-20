const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '192.168.100.2',
  user: 'safebryan',
  password: '081012',
  database: 'consultas_medicas',
  port: 3308
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

module.exports = db;
