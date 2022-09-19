const express = require("express");
const app = express();
const morgan = require("morgan");

//? ROUTES /////////////////////////////////////////////

// const indexRoute = require("./routes/index.routes"); //FIXME arreglameee
const productsRoute = require("./routes/products.routes");

//? SETTINGS ///////////////////////////////////////////

app.set("port", 8080); //* Configuración puerto
app.set("json spaces", 2); //* JSON formatter
app.set("views", __dirname + "/views");

//? MIDDLEWARES ///////////////////////////////////////

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/", express.static(__dirname + "/public"));
// app.use("/", indexRoute); //FIXME arreglameee
app.use("/api/products", productsRoute);

//? CONFIGURACIÓN EXTRA HBS ///////////////////////////

const { engine } = require("express-handlebars");
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: __dirname + "/views/layouts/layout.hbs",
    layoutsDir: __dirname + "/views/layout",
    partialsDir: __dirname + "/views/includes",
  })
);

//? VIEW ENGINES /////////////////////////////////////

app.set("view engine", "hbs");

//? STARTING SERVER ///////////////////////////////////

const server = app.listen(app.get("port"), () => {
  console.log(`Servidor express iniciado en puerto ${app.get("port")}`);
});

//? ERROR HANDLER ////////////////////////////////////////

server.on("error", (error) => {
  console.log(`Error !!!: ${error}`);
});
