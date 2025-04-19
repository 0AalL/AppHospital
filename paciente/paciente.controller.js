const db = require('../config/db');

exports.createPaciente = (req, res) => {
  const { nombre, edad, historial } = req.body;
  db.query('INSERT INTO paciente (nombre, edad, historial) VALUES (?, ?, ?)', [nombre, edad, historial], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Paciente creado', id: result.insertId });
  });
};

exports.getAllPacientes = (req, res) => {
  db.query('SELECT * FROM paciente', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getPacienteById = (req, res) => {
  db.query('SELECT * FROM paciente WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

exports.updatePaciente = (req, res) => {
  const { nombre, edad, historial } = req.body;
  db.query('UPDATE paciente SET nombre = ?, edad = ?, historial = ? WHERE id = ?', [nombre, edad, historial, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Paciente actualizado' });
  });
};

exports.deletePaciente = (req, res) => {
  db.query('DELETE FROM paciente WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Paciente eliminado' });
  });
};
