'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('empleados', [
      {
        nombre: 'Rosa Morales',
        cedula: '001-0101010-1',
        puesto: 'Recepcionista',
        correo: 'rosa.morales@clinic.com',
        telefono: '8091234567',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Pedro Sánchez',
        cedula: '001-0202020-2',
        puesto: 'Administrador',
        correo: 'pedro.sanchez@clinic.com',
        telefono: '8092345678',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Lucía Jiménez',
        cedula: '001-0303030-3',
        puesto: 'Enfermera',
        correo: 'lucia.jimenez@clinic.com',
        telefono: '8093456789',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Carlos Peña',
        cedula: '001-0404040-4',
        puesto: 'Contador',
        correo: 'carlos.pena@clinic.com',
        telefono: '8094567890',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Laura Martínez',
        cedula: '001-0505050-5',
        puesto: 'Limpieza',
        correo: 'laura.martinez@clinic.com',
        telefono: '8095678901',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Diego Rojas',
        cedula: '001-0606060-6',
        puesto: 'Mensajero',
        correo: 'diego.rojas@clinic.com',
        telefono: '8096789012',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Sofía Vargas',
        cedula: '001-0707070-7',
        puesto: 'Farmacéutica',
        correo: 'sofia.vargas@clinic.com',
        telefono: '8097890123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Jorge Castillo',
        cedula: '001-0808080-8',
        puesto: 'Técnico',
        correo: 'jorge.castillo@clinic.com',
        telefono: '8098901234',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert('paciente', [
      {
        edad: 35,
        historial: 'Hipertensión',
        nombre: 'Antonio Ramírez',
        cedula: '002-1111111-1',
        telefono: '8291111111',
      },
      {
        edad: 42,
        historial: 'Diabetes tipo 2',
        nombre: 'Marta López',
        cedula: '002-2222222-2',
        telefono: '8292222222',
      },
      {
        edad: 29,
        historial: 'Asma',
        nombre: 'Luis Herrera',
        cedula: '002-3333333-3',
        telefono: '8293333333',
      },
      {
        edad: 50,
        historial: 'Cirugía de corazón',
        nombre: 'Ana Reyes',
        cedula: '002-4444444-4',
        telefono: '8294444444',
      },
      {
        edad: 23,
        historial: 'Sin antecedentes',
        nombre: 'Daniela Paredes',
        cedula: '002-5555555-5',
        telefono: '8295555555',
      },
      {
        edad: 60,
        historial: 'Artrosis',
        nombre: 'Manuel Gómez',
        cedula: '002-6666666-6',
        telefono: '8296666666',
      },
      {
        edad: 31,
        historial: 'Alergias estacionales',
        nombre: 'Julia Franco',
        cedula: '002-7777777-7',
        telefono: '8297777777',
      },
      {
        edad: 45,
        historial: 'Colesterol alto',
        nombre: 'Samuel Rivera',
        cedula: '002-8888888-8',
        telefono: '8298888888',
      },
    ]);

    await queryInterface.bulkInsert('medico', [
      {
        especialidad: 'Pediatría',
        nombre: 'Dra. Carmen Salazar',
        cedula: '003-1111111-1',
        telefono: '8091110001',
      },
      {
        especialidad: 'Cardiología',
        nombre: 'Dr. José Mena',
        cedula: '003-2222222-2',
        telefono: '8092220002',
      },
      {
        especialidad: 'Neurología',
        nombre: 'Dra. Patricia Vargas',
        cedula: '003-3333333-3',
        telefono: '8093330003',
      },
      {
        especialidad: 'Dermatología',
        nombre: 'Dr. Ricardo Nolasco',
        cedula: '003-4444444-4',
        telefono: '8094440004',
      },
      {
        especialidad: 'Medicina general',
        nombre: 'Dra. Irene Peña',
        cedula: '003-5555555-5',
        telefono: '8095550005',
      },
      {
        especialidad: 'Gastroenterología',
        nombre: 'Dr. Mario Pérez',
        cedula: '003-6666666-6',
        telefono: '8096660006',
      },
      {
        especialidad: 'Endocrinología',
        nombre: 'Dra. Laura Ortiz',
        cedula: '003-7777777-7',
        telefono: '8097770007',
      },
      {
        especialidad: 'Urología',
        nombre: 'Dr. Andrés Mejía',
        cedula: '003-8888888-8',
        telefono: '8098880008',
      },
    ]);

    await queryInterface.bulkInsert('consulta', [
      {
        diagnostico: 'Gripe común',
        fecha: new Date(),
        tratamiento: 'Paracetamol y reposo',
        medico_id: 5,
        paciente_id: 1,
      },
      {
        diagnostico: 'Asma leve',
        fecha: new Date(),
        tratamiento: 'Inhalador y control ambiental',
        medico_id: 1,
        paciente_id: 3,
      },
      {
        diagnostico: 'Hipertensión',
        fecha: new Date(),
        tratamiento: 'Enalapril diario',
        medico_id: 6,
        paciente_id: 1,
      },
      {
        diagnostico: 'Dermatitis',
        fecha: new Date(),
        tratamiento: 'Crema tópica',
        medico_id: 4,
        paciente_id: 4,
      },
      {
        diagnostico: 'Colesterol alto',
        fecha: new Date(),
        tratamiento: 'Atorvastatina',
        medico_id: 7,
        paciente_id: 8,
      },
      {
        diagnostico: 'Dolor abdominal',
        fecha: new Date(),
        tratamiento: 'Análisis y dieta',
        medico_id: 3,
        paciente_id: 5,
      },
      {
        diagnostico: 'Migraña',
        fecha: new Date(),
        tratamiento: 'Ibuprofeno y descanso',
        medico_id: 2,
        paciente_id: 6,
      },
      {
        diagnostico: 'Chequeo general',
        fecha: new Date(),
        tratamiento: 'Exámenes rutinarios',
        medico_id: 5,
        paciente_id: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('consulta', null, {});
    await queryInterface.bulkDelete('medico', null, {});
    await queryInterface.bulkDelete('paciente', null, {});
    await queryInterface.bulkDelete('empleados', null, {});
  },
};

