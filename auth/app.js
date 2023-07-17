const express = require('express')
const router = require("./app/routes/user.js")
require("./app/models/index.js")
const app = express()

app.use(express.json())
app.use("/", router)

module.exports = app