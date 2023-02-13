import { Router } from "express";
import controller from "../controllers/user.controller.js";
const router = Router();

//? AUTHENTICATIONS

router.get("/login", controller.renderLoginView); //* FORM LOG IN
router.get("/signup", controller.renderRegistryView); //* FORM REGISTER
router.post("/signup", controller.signUpUser); //* REGISTER USER
router.post("/login", controller.logInUser); //* LOG IN USER
router.get("/logout", controller.logoutUser); //* LOG OUT

export default router;
