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
const Messages = [
  { username: "Felipe", message: "HOla" },
  { username: "Miguel", message: "HOlaa Felipe" },
  { username: "Fabiola", message: "Hola Amoor" },
]; //TODO Arreglar CHAT

io.on("connection", (socket) => {
  console.log(`New Connection: ${socket.id}`);
  socket.emit("all:messages", Messages); //todo evento allmessages nuevo : debe implementarse?

  socket.on("chat:message", (data) => {
    Messages.push(data); //FIXME me hago cargo de esto?
    io.sockets.emit("chat:message", data); //! Enviar nuevos mensajes
  });

  socket.on("chat:typing", (data) => {
    socket.broadcast.emit("chat:typing", data);
  });
});
