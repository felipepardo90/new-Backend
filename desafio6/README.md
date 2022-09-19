### Clases 11 y 12 - Semana 5

# WEBSOCKETS

## ¿Qué es websocket?

- Websocket es un **protocolo de red basado en TCP** que establece cómo deben intercambiarse datos entre redes.
- Es un protocolo fiable y eficiente, utilizado por prácticamente todos los clientes.
- El protocolo TCP **establece conexiones entre** dos **puntos finales** de comunicación, **llamados sockets**.
- De esta manera, el **intercambio** de datos puede producirse en las **dos direcciones**.
- En las **conexiones bidireccionales**, como las que crea Websocket, se intercambiab datos en ambas direcciones al mismo tiempo.
- La ventaja de usar Websocket es **acceder** de **forma más rápida** a los **datos**.
- Websocket permite una **comunicación directa y en tiempo real** entre una aplicación web y un servidor Websocket.

## ¿Cómo se accede a una web sin websockets?

- La trasmisión de páginas web en internet suele realizarse mediante una **conexión HTTP.** Este protocolo sirve para trasmitir datos y hace posible la carga de las páginas web en el navegador. Para lograrlo el **cliente** envía, con cada acción del usuario, una **solicitud al servidor**.
- Una vez enviada la solicitud, el servidor puede responder y mostrar el contenido solicitado. Se trata de un **rígido patrón de solicitud y respuesta** que provoca **largos tiempos de espera.**

## El protocolo websockets: principios

- Websocket permitió por primera vez **acceder** a una **web** de **forma dinámica en tiempo real**
- Basta con que el **cliente establezca** una **conexión** con el **servidor**, que se confirma mediante el llamado _apretón de manos_ o Websocket Protocol Handshake
- Con él, el **cliente envía al servidor** todos los **datos de identificación** necesarios para el intercambio de información.
- El **canal** de comunicación queda **"abierto"** tras el handshake
- El **servidor** puede **activarse por sí mismo** y poner toda la información a disposición del cliente, sin que este tenga que pedírselo. Si dispone de nueva información, se lo comunica al cliente, **sin necesidad de recibir una solicitud** específica para ello.
- Las **notificaciones push** de las páginas web funcionan según este principio.

## Conexiones Websocket

Websocket puede entenderse como un **canal de comunicación abierto**, en el cual queda abierta una **conexión activa tras el handshake** inicial entre el cliente y el servidor. Así, el servidor también puede enviar información nueva al cliente sin que este tenga que solicitarlo previamente cada vez.

# ¿Para qué se utiliza Websockets'

- Para establecer **conexiones de forma rápida**, por ejemplo; chats de asistencia técnica, tickers de noticias o de actualizaciones de bolsa en directo. Servicios de mensajería instantánea y juegos en tiempo real.
- Websocket también resulta muy útil en las **redes sociales** para establecer conexiones en directo con otras personas. ASí como para enviar y recibir mensajes instantáneos. Permite obtener altas velocidades de trasmisión y limitar los tiempos de latencia.

# ¿Qué es Socket.io?

Socket.IO es una **biblióteca de JavaScript** para aplicaciones web en tiempo real. Permite la comunicación bidireccional en tiempo real entre servidores y clientes web.

#### Tiene dos partes:

- Una biblióteca del lado del cliente que se ejecuta en el navegador.
- Una biblióteca del lado del servidor para Node.js.
  **_Ambos componentes tienen una API casi idéntica. Al igual que Node.js está impulsado por eventos._**

#### Características :

- Socket.IO **utiliza principalmente** el protocolo **Websocket** proporcionando la misma interfaz.
- Se puede **usar como un contenedor**
  para Websocket aunque proporciona muchas más funciones, incluída la trasmisión a múltiples sockets, el almacenamiento de datos asociados con cada cliente y E/S asíncronas
- Se puede instalar con npm

## Creación de proyecto e instalación de módulo

```javascript
npm init -y && npm i express socket.io
```

Configuramos nuestro archivo server.js importando en primer lugar los módulos que instalamos anteriormente.

```javascript
const express = require("express");
const { Server: IOServer } = require("socket.io");
```

## Inicialización de proyecto

Vamos a inicializar la función express(). También importaremos el módulo http que será necesario para que nuestros sockets funcionen.
Complementando la parte de las importaciones e inicializaciones el código quedaría de la siguiente forma:

```javascript
const express = require("express");
const { Server: HttpServer } = require("http");
const { Server: IOServer } = require("socket.io");

const app = express();
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);
```

## Inicialización del servidor

Configuramos el middleware para dejar disponibles las rutas al igual que los archivos estáticos, así el archivo _index.html_ se mostrará al ingresar a la página. **Arrancamos el servidor con http.listen()** y NO con app.listen()

```javascript
// Indicamos que queremos cargar los archivos estáticos que se encuentran en dicha carpeta

app.use(express.static("./public"));
// Esta ruta carga nuestro archivo index.html en la raiz de la misma
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});
// El servidor funcionando en el puerto 3000
httpServer.listen(3000, () => console.log("SERVER ON"));
```

## Inicialización de la vista

En nuestro archivo index.html agregamos la estructura inicial de nuestro proyecto y también referenciamos al index.js y al style.css

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charser="UTF-8">
    <meta name="viewport" content="">
    <title>SOCKETS</title>
    <link rel="stylesheets" href="/estilos.css">
    <script src="/scoket.io/socket.io.js"></script>
    <script src="/index.js"></script>
</head>
<body>
    <h1>TUTORIAL DE SOCKETS.IO</h1>
</body>
```

Se incluye un script que contiene la configuración de los sockets y es importante para que funcionen en nuestro cliente. Dicho script es parte del módulo socket.io.

## Inicialización del canal de Websocket

**Cliente:** A continuación procedemos a inicializar una constante en nuestro index.js que será el siguiente código.

```javascript
const socket=io() // Ya podemos empezar a usar los sockets desde el cliente.
```

**Server:** Una vez realizado lo anterior, nos vamos a nuestro archivo server.js y agregamos el siguiente código.

```javascript
io.on("connection", socket =>{
    // "connection" se ejecuta la primera vez que se abre una nueva conexión
    console.log("usuario conectado")
    // Se imprimirá solo la primera vez que se ha abierto la conexión
})
```

## Inicialización del server

```javascript
const express = require("express")
const {Server:HttpServer} = require("http")
const {Server:IOServer} = require("socket.io")

const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)


app.use(express.static("./public"))
// Indicamos que queremos cargar los archivos estáticos que se encuentran en la carpeta *public*
app.get("/", (req, res)=>{ //Esta ruta carga nuestro archivo index.html en la raiz de la misma
    res.sendFile("index.html", {root: __dirname})
})

httpServer.listen(3000, ()=> console.log("SERVER ON")) // El servidor funcionando en el puerto 3000

io.on("connection", socket =>{ //"connection se ejecuta la primera vez que se abre una nueva conexión"
    console.log("usuario conectado")// Se imprimirá solo la primera vez que se ha abierto la conexión
})
```

## Envío de datos al cliente (servidor)

Vamos a **emitir un mensaje de nuestro servidor al cliente**

```javascript
// Servidor
io.on("connection",socket =>{
    console.log("usuario conectado")
    socket.emit("Mi mensaje", "Este es mi mensaje desde el servidor")
})
```

Podemos ver que hemos utilizado el objeto socket y este a su vez contiene diversos métodos, entre ellos **emit()**. Este nos permite **enviar un mensaje del servidor al cliente**. El primer parámetro que recibe es el nombre de nuestro evento y el segundo parámetro es la información que queremos trasmitir.

## Recepción de datos del servidor (cliente)

Veamos cómo podemos recibir la información en el cliente. En nuestro archivo.js agregamos el siguiente código

```javascript
// Cliente
socket.on("mi mensaje", data =>{
    alert(data)
})
```

El evento *"mi mensaje"* recibe una data desde el servidor que será imprimida en un alert.

## Envío de datos al servidor (cliente)

También podemos **enviar información del cliente al servidor** de forma bastante similar. Por ejemplo, supongamos que después de imprimir el alert queremos enviar un mensaje al servidor que notifique que el mensaje fue recibido con éxito.

```javascript
// Cliente
socket.on("mi mensaje", data =>{
    alert(data)
    socket.emit("notificación", "Mensaje recibido exitosamente")
})
```

## Recepción de datos del cliente (servidor)

Para recibirlo en el cliente sería de la siguiente forma:

```javascript
// Servidor
socket.on("notificación", data =>{
    alert(data) 
    // "Mensaje recibido exitosamente"
})
```

## Envío de datos a todos los clientes conectados (servidor)

```javascript
io.on("connection",socket =>{
    console.log("Nuevo cliente conectado")

    // Envío los mensajes al cliente que se conectó
    socket.emit("mensajes", mensajes)

    // Escucho los mensajes enviados por el cliente y se los propago a todos
    socket.on("mensajes", data=>{
        mensajes.push({socketid:socket.id, mensaje:data})
        io.sockets.emit("mensajes", mensajes)
    })
})
```

Utilizando el método **io.sockets.emit** enviamos un mensaje global a todos los clientes conectados al canal de Websocket.