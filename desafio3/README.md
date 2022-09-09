# Semana 3 - Administradores de paquetes - servidores

# NPM

# NodeJS

Es un entorno en tiempo de ejecución en Javascript.Se basa en el motor de tiempo de ejecución de Javascript v8. Está escrito en C++ y dispone de módulos nativos.

## Modulos nativos

Un módulo es un conjunto de funciones y objetos de javascript que las aplicaciones externas pueden usar.

Los módulos básicos tienen la preferencia de cargarse primero si su identificador es pasado desde require(). Por ejemplo _require("fs")_ siempre devolverá lo construido en el módulo File System.

## Administradores de paquetes

Los administradores de paquetes (package manager) sirven para no tener que descargar, instalar y mantener las dependencias de unproyecto a mano.

# NPM

NodeJS Package Manager

### Instalando dependencias

Las dependencias pueden instalarse en forma local o global.

- Si instalamos en forma global, todos nuestros programas desarrollados en NodeJS contarán con esa librería, y su versión.
- Si instalamos en forma local, podremos elegir exactamente qué librería y con qué versión contará cada proyecto que desarrollemos.
- Si solo es una dependencia del entorno de desarrollo, le agregamos --save-dev ó -D ///

# HTTP

Es un modlo nativo de NodeJS.
Trabaja con el protocolo HTTP.
Para poder utilizarlo en nuestro código, tenemos que requerirlo mediante la instrucción require("http") y guardarlo en una variable, por convención...

```Javascript
const http = require("http")
```

Una de las tareas implementadas en el módulo HTTP es la de crear un servidor, que se hace con el módulo createServer(). Este método recibirá un callback que se ejecutará cada vez que el servidor reciba una petición.

Este "CALLBACK" recibe dos parámetros: la petición y la respuesta.

```Javascript
const server = http.createServer((petición, respuesta)=>{
    respuesta.end("Hola Mundo")
})
```

- En el ejemplo dado, "respuesta.end()" sirve para terminar la petición y enviarle datos al cliente.

```Javascript
const connectedServer = server.listen(8080, ()=>{
    console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`)
})
```

- Con esto, le decimos al servidor que escuche en el puerto 8080 (Generalmente usado, por convención, para el desarrollo backend. Para Frontend se usa el puerto 3000)

/////////////////////////////////////////////////!

# EXPRESS

Para poder usar el módulo, hay que importarlo al comienzo de nuestro archivo. El objeto obtenido es una función. Al ejecutarla, nos devuelve la aplicación servidor que configuraremos posteriormente.

```javascript
const express = require("express");

const app = express();
```

## Conexión del servidor

Vamos también a especificar el puerte

```javascript
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(
    `Servidor express escuchando en el puerto ${server.address().port}`
  );
});
```

## Manejo de errores de conexión

Para indicar una situación de **error** en la puesta en marcha del servidor, podemos configurar el evento _error_ a través del método _on_ sobre la salida de _listen_

### Ejemplo de conexión (con evento de error)

```javascript
const PORT = 8080;

const server = app.listen(PORT, () => {
  console.log(
    `Servidor express escuchando en el puerto ${server.address().port}`
  );
});

server.on("error", (error) => console.log(`Error en servidor ${error}`));
```

El **argumento error** del callback configurado para el **evento error** nos da la descripción del error ocurrido.

## Configuraciones básicas

### Petición GET

Cuando queremos obtener algún tipo de información del servidor utilizamos peticiones de tipo **GET**

***Ejemplo de manejador de peticiones GET a la ruta raiz del servidor***

```javascript

app.get('/', (req, res)=>{
    res.send({mensaje: 'Hola Mundo!'})
})
```

