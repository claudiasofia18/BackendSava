var express = require('express');
var router = express.Router();
var userController = require('../controllers/users.controller');

router.post('/client',userController.createClient);
router.post('/admin',userController.createAdmin);
router.post('/metodoContacto',userController.CreateContacto);

module.exports = router;