const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const medicoRoutes = require('./medico/medico.routes');
const authRoutes = require('./auth/auth.routes');

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/medicos', medicoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
});
