import { Router } from "express";
const router = Router();
import productsRoute from "./products.routes.js";
import passport from "passport";
import controller from "../controllers/index.controller.js";

let user = {
  name: "Fabiola",
};

//? INDEX
router.use("/api/products", productsRoute);
// router.get("/", controller.index)
router.get("/", (req, res, next) => {
  res.render("index", { user });
});

router.get("/signup", (req, res, next) => {
  res.render("register");
});

router.post(
  "/signup",
  passport.authenticate("local-signup", {
    successRedirect: "/",
    failureRedirect: "/signup",
    passReqToCallback: true,
  })
);

router.get("/signin", (req, res, next) => {});

router.post("/signin", (req, res, next) => {});

export default router;
