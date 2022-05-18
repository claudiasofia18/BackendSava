'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedioContacto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cliente,{foreignKey:'usuario',targetKey:'usuario'})
    }
  }
  MedioContacto.init({
    formaContacto: DataTypes.STRING,
    usuario: DataTypes.STRING,
    detalleContacto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MedioContacto',
  });
  return MedioContacto;
};