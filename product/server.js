const app = require('./app.js');
require('dotenv').config()
const PRODUCT_PORT = process.env.PRODUCT_PORT

app.listen(PRODUCT_PORT, () => {
  console.log('Le service product est en cours d\'exécution sur le port', PRODUCT_PORT);
});