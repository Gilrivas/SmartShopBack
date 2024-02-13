// db.js

const Sequelize = require('sequelize');

// Configura la conexión a la base de datos
const sequelize = new Sequelize('smartshop', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

// Define los modelos si es necesario
const User = sequelize.define('users', {
  user_name: {
    type: Sequelize.STRING
  },
  user_email: {
    type: Sequelize.STRING
  },
  user_password: {
    type: Sequelize.STRING
  },
},{
    timestamps: false // Habilita el uso de timestamps
  });

// Exporta la instancia de Sequelize y los modelos si es necesario
module.exports = {
  sequelize,
  User
};
