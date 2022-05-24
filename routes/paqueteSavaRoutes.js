var express = require('express');
var router = express.Router();
var PaqueteSavaController = require('../controllers/paqueteSavaController.js');

router.get('/', PaqueteSavaController.list);

module.exports = router;