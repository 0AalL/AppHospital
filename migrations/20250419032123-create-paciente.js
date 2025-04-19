'use strict';
module.exports = {
  
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('paciente', 'cedula', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('paciente', 'telefono', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },
  down: async (queryInterface) => {
   
  }
};

