var express = require('express');
var router = express.Router();
const dashboard_controller = require('../controllers/dashboard.controller')


router.get('/packages/delivered',dashboard_controller.delivered_packages);
router.get('/packages/total',dashboard_controller.total_packages);
router.get('/clients',dashboard_controller.total_clients);

module.exports = router;