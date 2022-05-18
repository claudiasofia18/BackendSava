'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PaqueteBodega extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Cliente,{foreignKey:'usuario',targetKey:'usuario'})
      this.belongsTo(models.PaqueteSava,{foreignKey:'codigoSava',targetKey:'codigoSava'})
    }
  }
  PaqueteBodega.init({
    numeroTrackeo: DataTypes.STRING,
    usuario:DataTypes.STRING,
    codigoSava:DataTypes.STRING,
    fechaLLegada: DataTypes.DATE,
    peso: DataTypes.FLOAT,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PaqueteBodega',
  });
  return PaqueteBodega;
};