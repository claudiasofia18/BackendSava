'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cliente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Persona,{foreignKey:'usuario'})
      this.hasMany(models.PaqueteSava,{foreignKey:'usuario',targetKey:'usuario'})
      this.hasMany(models.PaqueteBodega,{targetKey:'usuario',foreignKey:'usuario'})
    }
  }
  Cliente.init({
    usuario: DataTypes.STRING,
    NumeroLista: DataTypes.INTEGER,
    direccion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cliente',
  });
  return Cliente;
};