'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Personas', {
      correo: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
      },
      password: {
        type: Sequelize.STRING,
        allowNull:false
      },
      rol: {
        type: Sequelize.STRING,
        allowNull:false
      },
      token: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Personas');
  }
};