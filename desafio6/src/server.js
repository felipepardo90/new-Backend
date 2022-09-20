const express = require("express"),
  path = require("path");
const app = express();
const morgan = require("morgan");

//? ROUTES /////////////////////////////////////////////

const indexRoute = require("./routes/index.routes");

//? SETTINGS ///////////////////////////////////////////

app.set("port", 8080); //* Configuración puerto
app.set("json spaces", 2); //* JSON formatter
app.set("views", __dirname + "/views");

//? MIDDLEWARES ///////////////////////////////////////

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan("dev"));
app.use("/", express.static(path.join(__dirname, "../public"))); //? STATIC FILES
app.use("/", indexRoute); //

//? CONFIGURACIÓN EXTRA HBS ///////////////////////////

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

//? WEBSOCKETS //////////////////////////////////////////////

const SocketIO = require("socket.io");
const io = SocketIO(server);

io.on("connection", (socket) => {
  console.log(`New Connection: ${socket.id}`);

  socket.on("chat:message", (data) => {
    io.sockets.emit("chat:message", data);
  });

  socket.on("chat:typing", (data) => {
    socket.broadcast.emit("chat:typing", data)
  });
});
