const express = require("express");
const app = express();
const morgan = require("morgan");
const Container = require("./Contenedor");
const contenedor = new Container("products.json");

//? Settings

app.set("port", 8080); //*Configuración puerto
app.set("json spaces", 2); //* JSON formatter

//? Middlewares

//! completedFields revisará si el input del formulario o la query recibe todos los parámetros solicitados // Método POST

const completedFields = (req, res, next) => {
  const { title, price, thumbnail } = req.body;
  title && price && thumbnail
    ? next()
    : res.status(500).send({ message: "Debe completar todos los campos" });
};

//!

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
// app.use(completedFields);

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
  data
    ? res.status(200).json(data)
    : res.status(404).json({ error: "Producto no encontrado" });
});

//* RECIBE Y AGREGA UN PRODUCTO, Y LO DEVUELVE CON SU ID ASIGNADO

app.post("/api/products", completedFields, async (req, res) => {
  const { title, price, thumbnail } = req.body;
  const data = await contenedor.save({ title, price, thumbnail });
  data  
    ? res.status(500).json({ message: `El producto >> ${data.title} << ya existe en el archivo`})
    : res.status(200).json(data);

  // data !== false
  //   ? res.status(500).json({ error: "Complete los datos restantes" })
});

// app.put("/", (req, res) => {
//   res.send("<h1 style='color:blue'>HOLA SERVIDOR</h1>");
// });

app.delete("/api/products/:id", async (req, res) => {
  const data = await contenedor.deleteById(req.params.id);
  data
    ? res
        .status(200)
        .send({ message: `Se ha eliminado el producto ${data.title}` })
    : res.status(404).send({ message: "No se ha encontrado el producto" });
});

//? Servidor iniciado

const server = app.listen(app.get("port"), () => {
  console.log(`Servidor express iniciado en puerto ${app.get("port")}`);
});

//? Manejo de errores

server.on("error", (error) => {
  console.log(`Error !!!: ${error}`);
});
