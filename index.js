// Importación de módulos de versiones anteriores
const express = require('express');
const mongoose = require('mongoose');
const authRoute = require('./routes/authRoute')
const morgan = require('morgan')
const cors = require('cors')
const usuarioRoute = require('./routes/usuarioRoute')
require('dotenv').config();
// crear el servidor
const app = express();

app.use(cors( ))

// Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL);

app.use(express.json({ extended: true }));
app.use(express.urlencoded())
app.use(morgan('tiny'))

app.use('/api/usuarios', usuarioRoute);
app.use('/api/auth', authRoute);

// puerto y arranque del servidor
app.listen(4000, () => {
    console.log('Servidor Funcionando');
})
