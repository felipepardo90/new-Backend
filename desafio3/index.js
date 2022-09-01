const express = require("express");
const app = express();
const Container = require("./Contenedor");
const contenedor = new Container("./products.json");

//? Settings

app.set("port", 8080); //*Configuración puerto

//? Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//? Routes

app.get("/", (req, res) => {
  res.send("<h1 style='color:blue'>HOLA SERVIDOR</h1>");
});

app.get("/products", async (req, res) => {
  let data = await contenedor.getAll();
  res.send(data);
});

app.get("/randomProduct", async (req, res) => {
  //! Números aleatorios del 1 al 10
  let randomNum = Math.floor(Math.random() * 9 + 1);
  let data = await contenedor.getById(randomNum);
  //! Si el id generado no coincide con ningún producto, devuelve null; de lo contrario, envía la información solicitada
  data === null
    ? res.send(
        `<h4>ID:${randomNum} >> [[ERROR]] No se ha encontrado el producto</h4>`
      )
    : res.json(data);
});

//? Servidor iniciado

const server = app.listen(app.get("port"), () => {
  console.log(`Servidor express iniciado en puerto ${app.get("port")}`);
});

//? Manejo de errores

server.on("error", (error) => {
  console.log(`Error !!!: ${error}`);
});
