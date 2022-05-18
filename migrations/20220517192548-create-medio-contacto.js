'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MedioContactos', {
      formaContacto: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      usuario: {
        type: Sequelize.STRING,
        references:{
          model:'Clientes',
          key:'usuario'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey:true,
      },
      detalleContacto: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('MedioContactos');
  }
};