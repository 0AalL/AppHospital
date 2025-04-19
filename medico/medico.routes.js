const express = require('express');
const router = express.Router();
const controller = require('./medico.controller');
const auth = require('../middleware/auth.middleware');

router.post('/', auth, controller.createMedico);
router.get('/', auth, controller.getAllMedicos);
router.get('/:id', auth, controller.getMedicoById);
router.put('/:id', auth, controller.updateMedico);
router.delete('/:id', auth, controller.deleteMedico);

module.exports = router;
