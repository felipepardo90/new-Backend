const express = require("express");
const app = express();
const morgan = require("morgan");
const indexAPI = require("./routes/index")

//? Settings

app.set("port", 8080); //* Configuración puerto
app.set("json spaces", 2); //* JSON formatter

//? Middlewares

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/", express.static(__dirname + "/public"));

//? Routes ////////////////////////////

app.use("/api", indexAPI)


//? Servidor iniciado

const server = app.listen(app.get("port"), () => {
  console.log(`Servidor express iniciado en puerto ${app.get("port")}`);
});

//? Manejo de errores

server.on("error", (error) => {
  console.log(`Error !!!: ${error}`);
});
