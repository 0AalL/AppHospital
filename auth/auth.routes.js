const express = require('express');
const router = express.Router();
const authController = require('./auth.controller');

router.post('/', authController.login);
router.post('/', authController.logout);
module.exports = router;
