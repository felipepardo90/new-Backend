import express from "express";
import session from "express-session";
import passport from "passport";
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
app.set("jsonspaces", 2); //! JSON formatter
app.set("views", __dirname + "/views");
app.set("view engine", "ejs"); //! VIEW ENGINES

//! MIDDLEWARES

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(exp  ress.json());
app.use("/", express.static(path.join(__dirname, "../public"))); //! STATIC FILES
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
      maxAge: 60000,
    },
  })
);
app.use("/", indexRoute); //
app.use(passport.initialize());
app.use(passport.session());


export default app;
