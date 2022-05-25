'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('MedioContactos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      formaContacto: {
        type: Sequelize.STRING,
        unique:true
      },
      usuario: {
        type: Sequelize.INTEGER,
        references:{
          model:'Clientes',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey:true,
      },
      detalleContacto: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('MedioContactos');
  }
};