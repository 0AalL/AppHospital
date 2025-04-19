const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Admin routes
const adminAuthRoutes = require('./auth/auth.routes');
const adminMedicoRoutes = require('./medico/medico.routes');
const adminPacienteRoutes = require('./paciente/paciente.routes');
const adminConsultaRoutes = require('./consulta/consulta.routes');
const adminEmpleadoRoutes = require('./empleado/empleado.routes');

app.use(bodyParser.json());

app.use('/admin/login', adminAuthRoutes);
app.use('/admin/medicos', adminMedicoRoutes);
app.use('/admin/pacientes', adminPacienteRoutes);
app.use('/admin/consultas', adminConsultaRoutes);
app.use('/admin/empleados', adminEmpleadoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🩺 API de Administración corriendo en el puerto ${PORT}`);
});
