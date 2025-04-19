const express = require('express');
const router = express.Router();
const controller = require('./medico.controller');
const auth = require('../middleware/auth.middleware');

router.post('/', auth, controller.createMedico);
router.get('/', auth, controller.getAllMedicos);
router.get('/:cedula', auth, controller.getMedicoById);
router.put('/:cedula', auth, controller.updateMedico);
router.delete('/:cedula', auth, controller.deleteMedico);

module.exports = router;
