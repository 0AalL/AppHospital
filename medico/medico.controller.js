const db = require('../config/db');

exports.createMedico = (req, res) => {
  const { nombre, especialidad } = req.body;
  db.query('INSERT INTO medico (nombre, especialidad) VALUES (?, ?)', [nombre, especialidad], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Médico creado', id: result.insertId });
  });
};

exports.getAllMedicos = (req, res) => {
  db.query('SELECT * FROM medico', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getMedicoById = (req, res) => {
  db.query('SELECT * FROM medico WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

exports.updateMedico = (req, res) => {
  const { nombre, especialidad } = req.body;
  db.query('UPDATE medico SET nombre = ?, especialidad = ? WHERE id = ?', [nombre, especialidad, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Médico actualizado' });
  });
};

exports.deleteMedico = (req, res) => {
  db.query('DELETE FROM medico WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Médico eliminado' });
  });
};
