'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ContactMedia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Client,{foreignKey:'username'})
    }
  }
  ContactMedia.init({
    wayTocontact: DataTypes.STRING,
    username: DataTypes.STRING,
    details:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'ContactMedia',
  });
  return ContactMedia;
};