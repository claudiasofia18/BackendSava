'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PaqueteSavas', {
      codigoSava: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      estado: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.FLOAT
      },
      fechaSalida: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PaqueteSavas');
  }
};