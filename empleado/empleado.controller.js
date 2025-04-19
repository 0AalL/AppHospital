// controllers/empleadoController.js
const db = require('../config/db');  // Conexión a la base de datos

// GET: Obtener todos los empleados
exports.getAllEmpleados = (req, res) => {
    db.query('SELECT * FROM empleados', (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching empleados', error: err });
        }
        res.json(results);
    });
};

// GET: Obtener empleado por cédula (id)
exports.getEmpleadoById = (req, res) => {
    const { id } = req.params;
    db.query('SELECT * FROM empleados WHERE cedula = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error fetching empleado', error: err });
        }
        if (result.length === 0) {
            return res.status(404).json({ message: 'Empleado not found' });
        }
        res.json(result);
    });
};

// POST: Crear un nuevo empleado
exports.createEmpleado = (req, res) => {
    const { nombre, cedula, puesto, correo, telefono } = req.body;
    db.query('INSERT INTO empleados (nombre, cedula, puesto, correo, telefono) VALUES (?, ?, ?, ?, ?)',
        [nombre, cedula, puesto, correo, telefono], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error creating empleado', error: err });
            }
            res.status(201).json({ message: 'Empleado created', id: result.insertId });
        });
};

// PUT: Actualizar un empleado por cédula (id)
exports.updateEmpleado = (req, res) => {
    const { id } = req.params;
    const { nombre, puesto, correo, telefono } = req.body;
    db.query('UPDATE empleados SET nombre = ?, puesto = ?, correo = ?, telefono = ? WHERE cedula = ?',
        [nombre, puesto, correo, telefono, id], (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Error updating empleado', error: err });
            }
            res.json({ message: 'Empleado updated' });
        });
};

// DELETE: Eliminar un empleado por cédula (id)
exports.deleteEmpleado = (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM empleados WHERE cedula = ?', [id], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error deleting empleado', error: err });
        }
        res.json({ message: 'Empleado deleted' });
    });
};
