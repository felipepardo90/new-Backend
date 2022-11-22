import { Router } from "express";
const router = Router();
import productsRoute from "./products.routes.js"
import controller from "../controllers/index.controller.js"


//? INDEX
router.use("/api/products", productsRoute);
router.get("/", controller.index)
router.post("/", controller.post)
router.post("/register");
router.get("/logout", (req, res)=>{
    req.session.destroy((err)=>{
        res.redirect("/")
    })
});

export default router