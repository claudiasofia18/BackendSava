'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PaqueteSavas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigoSava: {
        type: Sequelize.STRING,
        unique:true
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
      usuario: {
        type: Sequelize.INTEGER,
        references:{
          model:'Clientes',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PaqueteSavas');
  }
};