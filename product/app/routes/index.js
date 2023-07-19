const express = require('express')
const router = express.Router();
const productCtrl = require("../controllers/index.js");
const auth = require("../middleware/auth.js");

router.get("/", auth, productCtrl.list);
router.post("/", auth, productCtrl.create);
router.get("/:id", auth, productCtrl.get);
router.put('/:id', auth, productCtrl.update)
router.delete("/:id", auth, productCtrl.delete)

module.exports = router