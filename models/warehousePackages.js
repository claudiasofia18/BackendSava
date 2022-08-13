'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class WarehousePackage extends Model {
    static associate(models) {
      this.belongsTo(models.Client,{foreignKey:'ClientId'})
      this.belongsTo(models.SavaPackage,{foreignKey:'sava_code'})
    }
  }
  WarehousePackage.init({
    tracking_number: DataTypes.STRING,
    ClientId:DataTypes.INTEGER,
    pounds: DataTypes.STRING,
    price: DataTypes.STRING,
    arrival_date: DataTypes.DATE,
    sava_code:DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'WarehousePackage',
  });
  return WarehousePackage;
};