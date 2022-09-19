const express = require("express");
const { Router } = express;
const router = Router();
const controller = require("../controllers/products.controller")

//? PRODUCTS

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/", controller.post)
router.put("/:id", controller.put)
router.delete("/:id", controller.delete)

//TODO arreglar esto


module.exports = router