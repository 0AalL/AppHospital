const db = require('../config/db');

// controllers/medicoController.js
// GET: Obtener todos los médicos
exports.getAllMedicos = (req, res) => {
    db.query('SELECT * FROM medico', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching medicos', error: err });
        }
        res.json(results);
    });
};

// GET: Obtener médico por cédula (id)
exports.getMedicoById = (req, res) => {
    const { cedula } = req.params;
    db.query('SELECT * FROM medico WHERE cedula = ?', [cedula], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching medico', error: err });
        }
        res.json(result);
    });
};

// POST: Crear un nuevo médico
exports.createMedico = (req, res) => {
    const { especialidad, nombre, cedula, telefono } = req.body;
    db.query('INSERT INTO medico (especialidad, nombre, cedula, telefono) VALUES (?, ?, ?, ?)',
        [especialidad, nombre, cedula, telefono], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error creating medico', error: err });
            }
            res.status(201).json({ message: 'Medico created', id: result.insertId });
        });
};

// PUT: Actualizar un médico por cédula (id)
exports.updateMedico = (req, res) => {
    const { cedula } = req.params;
    const { especialidad, nombre, telefono } = req.body;
    db.query('UPDATE medico SET especialidad = ?, nombre = ?, telefono = ? WHERE cedula = ?',
        [especialidad, nombre, telefono, cedula], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error updating medico', error: err });
            }
            res.json({ message: 'Medico updated' });
        });
};

// DELETE: Eliminar un médico por cédula (id)
exports.deleteMedico = (req, res) => {
    const { cedula } = req.params;
    db.query('DELETE FROM medico WHERE cedula = ?', [cedula], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting medico', error: err });
        }
        res.json({ message: 'Medico deleted' });
    });
};
