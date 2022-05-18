'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Clientes', {
      usuario: {
        type: Sequelize.STRING,
        references:{
          model:'Personas',
          key:'correo'
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        primaryKey:true,
        allowNull:false,

      },
      
      NumeroLista: {
        type: Sequelize.INTEGER
      },
      direccion: {
        type: Sequelize.STRING
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Clientes');
  }
};