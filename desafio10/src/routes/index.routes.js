import { Router } from "express";
const router = Router();
import productsRoute from "./products.routes.js"
import controller from "../controllers/index.controller.js"


//? INDEX
router.use("/api/products", productsRoute);
router.get("/", controller.index)


export default router