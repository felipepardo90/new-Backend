const express = require("express");
const { Router } = express;
const router = Router();
const controller = require("../controllers/index.controller")


//? INDEX
router.use("/", controller.index)

module.exports = router