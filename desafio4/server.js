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

//* DEVUELVE TODOS LOS PRODUCTOS

app.get("/api/products", async (req, res) => {
  const data = await contenedor.getAll();
  res.json(data);
});

//* DEVUELVE UN PRODUCTO SEGÚN SU ID

app.get("/api/products/:id", async (req, res) => {
  const idParam = req.params.id;
  const data = await contenedor.getById(idParam);

  //! Si el id generado no coincide con ningún producto, devuelve null; de lo contrario, envía la información solicitada
  data === null
    ? res.send({ error: "Producto no encontrado" })
    : res.json(data);
});

// app.post("/api/products", (req, res) => {
//     const {title, price, thumbnail} = req.body
//     contenedor.save({title, price, thumbnail})

//     res.send(`Se agregó un nuevo producto: ${title}`)

// });

// app.put("/", (req, res) => {
//   res.send("<h1 style='color:blue'>HOLA SERVIDOR</h1>");
// });

// app.delete("/", (req, res) => {
//   res.send("<h1 style='color:blue'>HOLA SERVIDOR</h1>");
// });

//? Servidor iniciado

const server = app.listen(app.get("port"), () => {
  console.log(`Servidor express iniciado en puerto ${app.get("port")}`);
});

//? Manejo de errores

server.on("error", (error) => {
  console.log(`Error !!!: ${error}`);
});
