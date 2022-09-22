const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");

//! ROUTES

const indexRoute = require("./routes/index.routes");

//! SETTINGS

app.set("port", 8080); //! CONFIG port
app.set("json spaces", 2); //! JSON formatter
app.set("views", __dirname + "/views");
app.set("view engine", "hbs"); //! VIEW ENGINES

//! MIDDLEWARES

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "../public"))); //! STATIC FILES
app.use("/", indexRoute); //

//! CONFIGURACIÓN EXTRA HBS

const { engine } = require("express-handlebars");
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    defaultLayout: __dirname + "/views/layouts/layout.hbs",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/includes",
  })
);

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
  socket.emit("all:messages", Messages);//todo evento allmessages nuevo : debe implementarse?

  socket.on("chat:message", (data) => {
    Messages.push(data);//FIXME me hago cargo de esto?
    io.sockets.emit("chat:message", data); //! Enviar nuevos mensajes
  });

  socket.on("chat:typing", (data) => {
    socket.broadcast.emit("chat:typing", data);
  });
});
