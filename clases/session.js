import express from "express";
import session from "express-session";
//* Mongo Connect
import MongoStore from "connect-mongo";
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };
import { MONGODB_URI, PORT, __dirname } from "../desafio10/src/config.js";
import bodyParser from "body-parser";
import path from "path";
import morgan from "morgan";

const app = express();

//! ROUTES

import indexRoute from "../desafio10/src/routes/index.routes.js";

//! SETTINGS

app.set("port", PORT); //! CONFIG port
app.set("json spaces", 2); //! JSON formatter
app.set("views", __dirname + "/views");
app.set("view engine", "ejs"); //! VIEW ENGINES

//! MIDDLEWARES

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "../public"))); //! STATIC FILES
app.use("/", indexRoute); //
app.use(
  session({
    secret: "12345",
    store: MongoStore.create({
      mongoUrl: MONGODB_URI,
      mongoOptions,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10 * 1000 * 60,
    },
  })
);

//* PRUEBAS

app.get("/", (req, res) => {
  req.session.user ? res.render("index") : res.render("login");
});

app.post("/", (req, res) => {
  const { user } = req.body;
  req.session.user = user;
  res.redirect("/");
});
// app.post("/register");
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
});

//*

export default app;