import express from "express";
import session from "express-session";
//* Mongo Connect
import MongoStore from "connect-mongo";
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };
import bodyParser from "body-parser";
import morgan from "morgan";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import * as dotenv from "dotenv";
dotenv.config()
const app = express();



//! ROUTES

import indexRoute from "./routes/index.routes.js";

//! SETTINGS

app.set("port", process.env.PORT); //! CONFIG port
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
    secret: "12341felipao512313",
    resave: "false",
    saveUninitialized: false,
    cookie: {
      maxAge: 10 * 1000 * 60,
    },
    store:MongoStore.create({
        mongoUrl:`mongodb+srv://${process.env.USER}:${process.env.PASS}@codercluster.exshfro.mongodb.net/?retryWrites=true&w=majority`,
        mongoOptions
    })
}))

export default app;
