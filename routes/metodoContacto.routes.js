var express = require('express');
var router = express.Router();
var metodoController= require('../controllers/MetodoContacto.controller');

router.post('/crear',metodoController.CreateContacto);


module.exports = router;