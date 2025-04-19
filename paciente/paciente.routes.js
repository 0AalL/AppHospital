const express = require('express');
const router = express.Router();
const controller = require('./paciente.controller');
const auth = require('../middleware/auth.middleware');

router.post('/', auth, controller.createPaciente);
router.get('/', auth, controller.getAllPacientes);
router.get('/:cedula', auth, controller.getPacienteById);
router.put('/:cedula', auth, controller.updatePaciente);
router.delete('/:cedula', auth, controller.deletePaciente);

module.exports = router;
