'use strict';
module.exports = {
  
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('medico', 'cedula', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('medico', 'telefono', {
      type: Sequelize.STRING,
      allowNull: true
    });
  },
  down: async (queryInterface) => {
    
  }
};
