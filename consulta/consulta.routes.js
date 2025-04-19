const express = require('express');
const router = express.Router();
const controller = require('./consulta.controller');
const auth = require('../middleware/auth.middleware');

router.post('/', auth, controller.createConsulta);
router.get('/', auth, controller.getAllConsultas);
router.put('/:id', auth, controller.updateConsulta);
router.delete('/:id', auth, controller.deleteConsulta);
router.get('/consultas/medico/:medico_id', controller.getConsultasByMedico);
router.get('/consultas/paciente/:paciente_id', controller.getConsultasByPaciente)

module.exports = router;
