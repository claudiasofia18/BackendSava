'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RelacionPaquetes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  RelacionPaquetes.init({
    codigoSava: DataTypes.STRING,
    numeroTrackeo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'RelacionPaquetes',
  });
  return RelacionPaquetes;
};