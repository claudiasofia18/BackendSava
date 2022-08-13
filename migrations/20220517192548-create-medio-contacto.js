'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ContactMedias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      wayTocontact: {
        type: Sequelize.STRING,
        unique:true
      },
      username: {
        type: Sequelize.INTEGER,
        references:{
          model:'Clients',
          key:'id'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey:true,
      },
      details: {
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
    await queryInterface.dropTable('ContactMedias');
  }
};