const app = require("./app");

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
//! CONTENEDOR PRODUCTOS
const Messages = [
  { username: "Felipe", message: "HOla" },
  { username: "Miguel", message: "HOlaa Felipe" },
  { username: "Fabiola", message: "Hola Amoor" },
]; //TODO Arreglar CHAT

io.on("connection", (socket) => {
  console.log(`New Connection: ${socket.id}`);
  // socket.emit("all:messages", Messages); //todo evento allmessages nuevo : debe implementarse?

  //! PRODUCTOS

  socket.on("new-product", async (object) => {
    //! Guardar producto
    const data = await contenedor.save(object);
    data === null && socket.emit("new-product", object.title);
  });

  //! CHAT

  socket.on("chat:message", (data) => {
    Messages.push(data); //FIXME me hago cargo de esto?
    io.sockets.emit("chat:message", data); //! Enviar nuevos mensajes
  });

  socket.on("chat:typing", (data) => {
    socket.broadcast.emit("chat:typing", data);
  });
});
