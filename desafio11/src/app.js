import express from "express";
import session from "express-session";
import passport from "passport"
import indexRoute from "./routes/index.routes.js";
//* Mongo Connect
import MongoStore from "connect-mongo";
import { MONGODB_URI, PORT, __dirname } from "./config.js";
import bodyParser from "body-parser";
import path from "path";
import morgan from "morgan";

//! Initializatión

const app = express();
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };


//! SETTINGS

app.set("port", PORT); //! CONFIG port
app.set("json spaces", 2); //! JSON formatter
app.set("views", __dirname + "/views");
app.set("view engine", "ejs"); //! VIEW ENGINES

//! MIDDLEWARES

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "../public"))); //! STATIC FILES
app.use(session({
  secret: "12345",
  store: MongoStore.create({
    mongoUrl: MONGODB_URI,
    mongoOptions,
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60000,
  },
})
);
app.use("/", indexRoute); //
app.use(passport.initialize())
app.use(passport.session())

//* PRUEBAS

// app.get("/", (req, res) => {
//   req.session.user ? res.render("index") : res.render("login");
// });

// app.post("/", (req, res) => {
//   const { user } = req.body;
//   req.session.user = user;
//   res.redirect("/");
// });
// // app.post("/register");
// app.get("/logout", (req, res) => {
//   req.session.destroy((err) => {
//     res.redirect("/");
//   });
// });

//*

export default app;
