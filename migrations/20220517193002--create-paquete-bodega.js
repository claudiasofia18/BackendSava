'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PaqueteBodegas', {
      numeroTrackeo: {
        type: Sequelize.STRING,
        primaryKey:true,
        allowNull:false
      },
      usuario:{
        type: Sequelize.STRING,
        references:{
          model:'Clientes',
          key:'usuario'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      codigoSava:{
        type: Sequelize.STRING,
        references:{
          model:'PaqueteSavas',
          key:'CodigoSava'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      fechaLLegada: {
        type: Sequelize.DATE
      },
      peso: {
        type: Sequelize.FLOAT
      },
      foto: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PaqueteBodegas');
  }
};