import { Router } from "express";
const router = Router();
import productsRoute from "./products.routes.js";
import passport from "passport";
import controller from "../controllers/index.controller.js";

//! RUTAS SOLICITADAS
router.get("/info", (req, res) => {
  res.send({
    info: {
      "Input Arguments": process.argv.slice(2),
      OS: process.platform,
      "Node Version": process.version,
      "Memory Usage": process.memoryUsage().rss,
      "Execution Path": process.execPath,
      "Process ID": process.pid,
      "Current Working Directory": process.cwd(),
    },
  });
});

//? RANDOM

router.get("/api/random", (req, res) => {
  res.send("Random");
});

//!

router.use("/api/products", productsRoute);
// router.get("/", controller.index)
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  !req.session.name
    ? res.send("No está el usuario")
    : res.send("Bienvenido hdpp");
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

router.get("/signin", (req, res, next) => {
  res.render("signin");
});

router.post(
  "/signin",
  passport.authenticate("local-signin", {
    successRedirect: "/profile",
    failureRedirect: "/signin",
    failureFlash: true,
  })
);

router.get("/logout", (req, res, next) => {
  req.logout();
  res.redirect("/");
});

export default router;
