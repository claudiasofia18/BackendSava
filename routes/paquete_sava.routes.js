var express = require('express');
var router = express.Router();
var PaqueteSavaController = require('../controllers/paquete_sava.controller.js');

router.get('/', PaqueteSavaController.list);

module.exports = router;