const { Router } = require("express");
const router = Router();
const controller = require("../controllers/products.controller")
const completedFields = require("../libs/middlewares")
// import completedFields from "../libs/middlewares";

//? PRODUCTS

router.get("/", controller.getAll)
router.get("/:id", controller.getById)
router.post("/",completedFields, controller.post)
router.put("/:id",completedFields, controller.put)
router.delete("/:id", controller.delete)

module.exports = router