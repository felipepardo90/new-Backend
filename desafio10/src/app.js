import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo"
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

import morgan from "morgan";


//! ROUTES

import indexRoute from "./routes/index.routes.js";

//! SETTINGS

app.set("port", 8080); //! CONFIG port
app.set("json spaces", 2); //! JSON formatter
app.set("views", __dirname + "/views");
app.set("view engine", "ejs"); //! VIEW ENGINES

//! MIDDLEWARES

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "../public"))); //! STATIC FILES
app.use("/", indexRoute); //
app.use(session({
    secret:'12341felipao512313',
    resave: 'false',
    saveUninitialized: false,
    cookie: {
        maxAge: 10 * 1000 * 60,
    },
    store:MongoStore.create({
        mongoUrl:'mongodb+srv://Felipao:b7a4jdULJwFxQc8K@codercluster.exshfro.mongodb.net/?retryWrites=true&w=majority',
        mongoOptions
    })
}))

export default app;
