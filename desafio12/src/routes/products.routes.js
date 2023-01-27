import { Router } from "express";
import controller from "../controllers/products.controller.js";
import { completedFields } from "../libs/middlewares.js";
const router = Router();

//? PRODUCTS

router.get("/", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", completedFields, controller.post);
router.put("/:id", completedFields, controller.put);
router.delete("/:id", controller.delete);

export default router;
