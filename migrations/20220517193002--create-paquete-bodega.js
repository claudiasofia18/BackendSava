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
      client_name: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      pounds: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.STRING,
      },
      departure_date: {
        type: Sequelize.DATE,
      },
      arrival_date_destiny: {
        type: Sequelize.DATE,
      },
      arrival_date_warehouse: {
        type: Sequelize.DATE,
      },
      sava_code:{
        type: Sequelize.STRING,
        references:{
          model:'PaqueteSavas',
          key:'codigoSava'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      images: {
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
    await queryInterface.dropTable('WarehousePackages');
  }
};