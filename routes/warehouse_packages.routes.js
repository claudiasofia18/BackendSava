var express = require('express');
var router = express.Router();
var WarehousePackageController = require('../controllers/warehouse_package.controller.js');

router.get('/warehouse-packages', WarehousePackageController.list);
router.post('/warehouse-packages', WarehousePackageController.createPackage);
router.put('/warehouse-packages/:id',WarehousePackageController.updatePackage);
router.post('/warehouse-packages/:id', WarehousePackageController.deletePackage);

module.exports = router;