const express = require("express");
const app = express();
const morgan = require("morgan");
const Container = require("./Contenedor");
const contenedor = new Container("products.json");

//? Settings

app.set("port", 8080); //*Configuración puerto
app.set("json spaces", 2); //* JSON formatter

//? Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));

//? Routes

//* DEVUELVE TODOS LOS PRODUCTOS

app.get("/api/products", async (req, res) => {
  const data = await contenedor.getAll();
  res.status(200).json(data);
});

//* DEVUELVE UN PRODUCTO SEGÚN SU ID

app.get("/api/products/:id", async (req, res) => {
  const data = await contenedor.getById(req.params.id);

  //! Si el id generado no coincide con ningún producto, devuelve null; de lo contrario, envía la información solicitada
  data === null
    ? res.status(404).json({ error: "Producto no encontrado" })
    : res.status(200).json(data);
});

//* RECIBE Y AGREGA UN PRODUCTO, Y LO DEVUELVE CON SU ID ASIGNADO

app.post("/api/products", async (req, res) => {
  const { title, price, thumbnail } = req.body;
  const data = await contenedor.save({ title, price, thumbnail });
  (title && price && thumbnail) ||
    res.status(500).json({ error: "Complete los datos restantes" });
  data === null
    ? res.status(500).json({ message: "El producto ya existe en el archivo" })
    : res.status(200).json(data);
});

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
