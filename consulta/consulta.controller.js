const db = require('../config/db');

exports.createConsulta = (req, res) => {
  const { diagnostico, fecha, tratamiento, medico_id, paciente_id } = req.body;
  db.query('INSERT INTO consulta (diagnostico, fecha, tratamiento, medico_id, paciente_id) VALUES (?, ?, ?, ?, ?)', 
  [diagnostico, fecha, tratamiento, medico_id, paciente_id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'Consulta creada', id: result.insertId });
  });
};

exports.getAllConsultas = (req, res) => {
  db.query('SELECT * FROM consulta', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getConsultaById = (req, res) => {
  db.query('SELECT * FROM consulta WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results[0]);
  });
};

exports.updateConsulta = (req, res) => {
  const { diagnostico, fecha, tratamiento, medico_id, paciente_id } = req.body;
  db.query('UPDATE consulta SET diagnostico = ?, fecha = ?, tratamiento = ?, medico_id = ?, paciente_id = ? WHERE id = ?', 
  [diagnostico, fecha, tratamiento, medico_id, paciente_id, req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Consulta actualizada' });
  });
};

exports.deleteConsulta = (req, res) => {
  db.query('DELETE FROM consulta WHERE id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Consulta eliminada' });
  });
};
