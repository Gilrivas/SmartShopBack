// index.js

const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./database');
const signup = require('./Signup');
const login = require('./login');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define tus rutas aquí
app.post('/signup', signup);
app.post('/login', login);

// Autentica la conexión a la base de datos y luego inicia el servidor
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  })
  .catch(error => {
    console.error('Unable to connect to the database:', error);
  });
