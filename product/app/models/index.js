const mongoose = require('mongoose');
require('dotenv').config()

mongoose.connect(process.env.DATABASE_URL, {
  ssl: process.env.DATABASE_SSL
})
  .then(() => {
    console.log('Connexion à MongoDB réussie, sur la bdd', process.env.DATABASE_NAME);
  })
  .catch((error) => {
    console.log('Erreur de connexion à MongoDB :', error);
  });

module.exports = mongoose.connection