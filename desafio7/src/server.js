const app = require("./app.js");
//! DATABASE
const knex = require("knex");
const connection = require("./db/db");
const Knex = knex(connection);

Knex.schema
  .createTable("usuarios", (table) => {
    table.increments("id");
    table.string("name");
    table.string("lastname");
    table.string("email");
  })
  .then(() => console.log("tabla creada"))
  .catch((e) => {
    console.log("error!", e);
    throw e;
  })
  .finally(() => {
    Knex.destroy();
  });

//! STARTING SERVER

const server = app.listen(app.get("port"), () => {
  console.log(`Servidor express iniciado en puerto ${app.get("port")}`);
});

//! ERROR HANDLER

server.on("error", (error) => {
  console.log(`Error !!!: ${error}`);
});

//! WEBSOCKETS

const SocketIO = require("socket.io");
const io = SocketIO(server);
//! CONTENEDOR PRODUCTOS
const Container = require("./models/Container");
const contenedor = new Container("products.json");
//! CONTENEDOR MENSAJES
const Messages = require("./models/Chat");
const messages = new Messages("chat.json");

io.on("connection", async (socket) => {
  //! Nueva conexión
  console.log(`New Connection: ${socket.id}`);

  //! PRODUCTOS

  const products = await contenedor.getAll();
  socket.emit("product:all", products);

  //! Guardar producto
  socket.on("product:new", async (object) => {
    const data = await contenedor.save(object);
    data === null
      ? socket.emit("product:submit", { product: object, status: true })
      : socket.emit("product:submit", { product: object, status: false });
    io.sockets.emit("product:all", products);
  });

  //! CHAT

  //! El evento chat:messages iniciará enviando el array existente al cliente
  const allMessages = await messages.readMessages();
  socket.emit("chat:history", allMessages);

  //! Se escucha el evento chat:message, se guarda el mensaje recibido por el cliente y se emite un mensaje general con el array Messages actualizado a todos los sockets conectados y por conectarse

  socket.on("chat:message", (data) => {
    messages.saveMessage(data);
    io.sockets.emit("chat:history", allMessages);
  });

  //! Se escucha el evento chat:typing y se emite un mensaje a todos los sockets conectados, excepto al que "está escribiendo..." con el método broadcast

  socket.on("chat:typing", (data) => {
    socket.broadcast.emit("chat:typing", data);
  });
});
