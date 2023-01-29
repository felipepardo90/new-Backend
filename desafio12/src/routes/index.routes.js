import { Router } from "express";
const router = Router();
import productsRoute from "./products.routes.js";
import usersRoute from "./user.routes.js";
import controller from "../controllers/index.controller.js";

router.get("/", controller.index)
router.use("/auth", usersRoute)
router.use("/api/products", productsRoute);

export default router
