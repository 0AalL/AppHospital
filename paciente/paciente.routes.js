const express = require('express');
const router = express.Router();
const controller = require('./paciente.controller');
const auth = require('../middleware/auth.middleware');

router.post('/', auth, controller.createPaciente);
router.get('/', auth, controller.getAllPacientes);
router.get('/:id', auth, controller.getPacienteById);
router.put('/:id', auth, controller.updatePaciente);
router.delete('/:id', auth, controller.deletePaciente);

module.exports = router;
