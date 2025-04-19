// controllers/pacienteController.js
const db = require('../config/db');  // Conexión a la base de datos

// GET: Obtener todos los pacientes
exports.getAllPacientes = (req, res) => {
    db.query('SELECT * FROM paciente', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching pacientes', error: err });
        }
        res.json(results);
    });
};

// GET: Obtener paciente por cédula (id)
exports.getPacienteById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM paciente WHERE cedula = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching paciente', error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Paciente not found' });
        }
        res.json(result);
    });
};

// POST: Crear un nuevo paciente
exports.createPaciente = (req, res) => {
    const { nombre, cedula, edad, telefono, historial } = req.body;
    db.query('INSERT INTO paciente (nombre, cedula, edad, telefono, historial) VALUES (?, ?, ?, ?, ?)',
        [nombre, cedula, edad, telefono, historial], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error creating paciente', error: err });
            }
            res.status(201).json({ message: 'Paciente created', id: result.insertId });
        });
};

// PUT: Actualizar un paciente por cédula (id)
exports.updatePaciente = (req, res) => {
    const { id } = req.params;
    const { nombre, edad, telefono, historial } = req.body;
    db.query('UPDATE paciente SET nombre = ?, edad = ?, telefono = ?, historial = ? WHERE cedula = ?',
        [nombre, edad, telefono, historial, id], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error updating paciente', error: err });
            }
            res.json({ message: 'Paciente updated' });
        });
};

// DELETE: Eliminar un paciente por cédula (id)
exports.deletePaciente = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM paciente WHERE cedula = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting paciente', error: err });
        }
        res.json({ message: 'Paciente deleted' });
    });
};
