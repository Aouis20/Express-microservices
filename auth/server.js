const app = require('./app.js');
require('dotenv').config()
const AUTH_PORT = process.env.AUTH_PORT

app.listen(AUTH_PORT, () => {
  console.log('Le service d\'authentification est en cours d\'exécution sur le port', AUTH_PORT);
});