const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Admin routes
const adminAuthRoutes = require('./auth/auth.routes');
const adminMedicoRoutes = require('./medico/medico.routes');
const adminPacienteRoutes = require('./paciente/paciente.routes');
const adminConsultaRoutes = require('./consulta/consulta.routes');
const adminEmpleadoRoutes = require('./empleado/empleado.routes');

// Middleware de autenticación JWT
const jwtMiddleware = require('./middleware/auth.middleware');

app.use(bodyParser.json());

// Ruta de login que no necesita autenticación
app.use('/admin/login', adminAuthRoutes);

// Rutas protegidas que requieren autenticación JWT
app.use('/admin/medicos', jwtMiddleware, adminMedicoRoutes);
app.use('/admin/pacientes', jwtMiddleware, adminPacienteRoutes);
app.use('/admin/consultas', jwtMiddleware, adminConsultaRoutes);
app.use('/admin/empleados', jwtMiddleware, adminEmpleadoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🩺 API de Administración corriendo en el puerto ${PORT}`);
});
