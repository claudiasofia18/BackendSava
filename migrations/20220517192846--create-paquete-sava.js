'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SavaPackages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sava_code: {
        type: Sequelize.STRING,
        unique:true
      },
      status: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      departureDate: {
        type: Sequelize.DATE
      },
      arrival_date_destiny: {
        type: Sequelize.DATE,
      },
      username: {
        type: Sequelize.INTEGER,
        references:{
          model:'Clients',
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
    await queryInterface.dropTable('SavaPackages');
  }
};