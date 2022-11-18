import { Router } from "express";
const router = Router();
import productsRoute from "./products.routes.js"
import controller from "../controllers/index.controller.js"


//? INDEX
router.get("/", controller.index)
router.post("/", controller.post)
router.use("/api/products", productsRoute);
router.post("/register", controller.post);
router.get("/login", (req, res)=>{
    res.render("login")
});
router.get("/logout", (req, res)=>{
    req.session.destroy((err)=>{
        res.redirect("/")
    })
});

export default router