const db = require('../config/db');
const bcrypt = require('bcrypt');

const createEmpleado = async (req, res) => {
    try {
        const { nombre, puesto, correo, telefono, contrasena, centro_id } = req.body;

        const hashedPassword = await bcrypt.hash(contrasena, 10);

        const [result] = await db.query(
            `INSERT INTO empleado (nombre, puesto, correo, telefono, contrasena, centro_id)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [nombre, puesto, correo, telefono, hashedPassword, centro_id]
        );

        res.status(201).json({ id: result.insertId, message: 'Empleado creado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear empleado' });
    }
};

const getAllEmpleados = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, nombre, puesto, correo, telefono, centro_id FROM empleado');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener empleados' });
    }
};

const getEmpleadoById = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, nombre, puesto, correo, telefono, centro_id FROM empleado WHERE id = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener empleado' });
    }
};

const updateEmpleado = async (req, res) => {
    try {
        const { nombre, puesto, correo, telefono, contrasena, centro_id } = req.body;

        let updateQuery = `UPDATE empleado SET nombre = ?, puesto = ?, correo = ?, telefono = ?, centro_id = ?`;
        const params = [nombre, puesto, correo, telefono, centro_id];

        if (contrasena) {
            const hashedPassword = await bcrypt.hash(contrasena, 10);
            updateQuery += `, contrasena = ?`;
            params.push(hashedPassword);
        }

        updateQuery += ` WHERE id = ?`;
        params.push(req.params.id);

        const [result] = await db.query(updateQuery, params);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        res.json({ message: 'Empleado actualizado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar empleado' });
    }
};

const deleteEmpleado = async (req, res) => {
    try {
        const [result] = await db.query('DELETE FROM empleado WHERE id = ?', [req.params.id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Empleado no encontrado' });
        }

        res.json({ message: 'Empleado eliminado' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar empleado' });
    }
};

module.exports = {
    createEmpleado,
    getAllEmpleados,
    getEmpleadoById,
    updateEmpleado,
    deleteEmpleado
};
