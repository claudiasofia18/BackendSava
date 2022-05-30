'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('RelacionPaquetes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigoSava: {
        type: Sequelize.STRING,
        references:{
          model:'PaqueteSavas',
          key:'codigoSava'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      numeroTrackeo: {
        type: Sequelize.STRING,
        references:{
          model:'PaqueteBodegas',
          key:'numeroTrackeo'
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
    await queryInterface.dropTable('RelacionPaquetes');
  }
};