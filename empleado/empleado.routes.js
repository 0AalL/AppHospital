const express = require('express');
const router = express.Router();
const controller = require('./empleado.controller');
const auth = require('../middleware/auth.middleware');

router.post('/', auth, controller.createEmpleado);
router.get('/', auth, controller.getAllEmpleados);
router.get('/:id', auth, controller.getEmpleadoById);
router.put('/:id', auth, controller.updateEmpleado);
router.delete('/:id', auth, controller.deleteEmpleado);

module.exports = router;
