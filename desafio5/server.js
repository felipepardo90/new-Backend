const express = require("express");
const app = express();
const morgan = require("morgan");
const indexAPI = require("./routes/index");

//? SETTINGS ///////////////////////////////////////////

app.set("port", 8080); //* Configuración puerto
app.set("json spaces", 2); //* JSON formatter
app.set('views', __dirname + '/views')

//? MIDDLEWARES ///////////////////////////////////////

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
// app.use("/", express.static(__dirname + "/public"));

//? VIEW ENGINES /////////////////////////////////////

app.set('view engine', 'pug')
//! app.set('view engine', 'ejs')
//! app.set('view engine', 'hbs')

//? ROUTES ///////////////////////////////////////////

app.use("/", indexAPI);

//? STARTING SERVER ///////////////////////////////////

const server = app.listen(app.get("port"), () => {
  console.log(`Servidor express iniciado en puerto ${app.get("port")}`);
});

//? ERROR HANDLER ////////////////////////////////////////

server.on("error", (error) => {
  console.log(`Error !!!: ${error}`);
});