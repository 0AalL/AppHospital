// migrations/xxxxxx-create-usuario.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre_usuario: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      contrasena: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tipo_usuario: {
        type: Sequelize.ENUM('medico', 'empleado', 'administrador'),
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  },
};

