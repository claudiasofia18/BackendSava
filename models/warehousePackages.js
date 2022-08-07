'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WarehousePackage extends Model {
    static associate(models) {
      this.belongsTo(models.Cliente,{foreignKey:'client_ name'})
      this.belongsTo(models.PaqueteSava,{foreignKey:'sava_code'})
    }
  }
  WarehousePackage.init({
    tracking_number: DataTypes.STRING,
    client_name:DataTypes.STRING,
    status: DataTypes.STRING,
    pounds: DataTypes.STRING,
    price: DataTypes.STRING,
    departure_date: DataTypes.DATE,
    arrival_date_destiny: DataTypes.DATE,
    arrival_date_warehouse: DataTypes.DATE,
    sava_code:DataTypes.STRING,
    images: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'WarehousePackage',
  });
  return WarehousePackage;
};