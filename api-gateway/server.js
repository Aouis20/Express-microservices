const express = require('express');
const app = express();
const proxy = require("express-http-proxy")
require('dotenv').config()
const port = process.env.PORT

app.use("/api/auth", proxy("http://auth:" + process.env.AUTH_PORT))

app.listen(port, () => {
  console.log('API Gateway en cours d\'exécution sur le port', port);
});