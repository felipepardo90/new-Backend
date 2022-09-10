const express = require("express");
const { Router } = express;
const router = Router();
const productsRoute = require("./products")




//? Route

router.use("/products", productsRoute)


module.exports = router