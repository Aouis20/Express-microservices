const express = require('express')
const router = express.Router();
const userCtrl = require("../controllers/user.js");
const userInfoFromToken = require("../middleware/userInfoFromToken.js")

router.post("/register", userCtrl.register);
router.post('/login', userCtrl.login);
router.post('/', userInfoFromToken, userCtrl.getUserInfoFromToken);

module.exports = router