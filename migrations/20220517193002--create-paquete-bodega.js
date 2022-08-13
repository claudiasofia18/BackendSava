'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('WarehousePackages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tracking_number: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      ClientId:{
        type: Sequelize.INTEGER,
        references:{
          model:'Clients',
          key:'username'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      pounds: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      arrival_date: {
        type: Sequelize.DATEONLY,
      },
      sava_code:{
        type: Sequelize.STRING,
        references:{
          model:'SavaPackages',
          key:'sava_code'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        allowNull: true
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
    await queryInterface.dropTable('WarehousePackages');
  }
};