// migrations/xxxxxx-create-usuario.js
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Hashear la contraseña "1234"
    const hashedPassword = await bcrypt.hash('1234', 10);

    // Crear la tabla de usuarios
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

    // Insertar un usuario con la contraseña hasheada "1234"
    await queryInterface.bulkInsert('usuarios', [
      {
        nombre_usuario: 'admin',
        contrasena: hashedPassword,
        tipo_usuario: 'administrador',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  },
};

