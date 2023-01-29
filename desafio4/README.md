# Clases 7 y 8

# Express Avanzado

## Aplicaciones RESTful

Cuando hablamos de aplicaciones **RESTful**, nos referimos a aplicaciones que operan en forma de servicios web, respondiendo consultas a otros sistemas a través de internet. Dichas aplicaciones lo hacen respetando algunas reglas y convenciones.

## Repaso del protocolo HTTP

- El protocolo **_HTTP_** se basa en un esquema de petición-respuesta.
- Existen clientes que realizan solicitudes de transmisión de datos, y un servidor que atiende peticiones.
- **_HTTP_** establece varios tipos de peticiones, siendo las principales **POST, GET, PUT y DELETE**

### Códigos de estado

Cada mensaje de respuesta de HTTP tiene un código de estado numérico de tres cifras que indica el resultado de la petición.

- 1\*\* (informativo): la petición fue recibida, y continúa su procesamiento.
- 2\*\* (éxito): La petición fue recibida con éxito, comprendida y procesada.
- 3\*\* (redirección): Más acciones son requeridas para completar la petición.
- 4\*\* (error del cliente): la petición tiene algún error, y no puede ser procesada.
- 5\*\* (error del servidor): El servidor falló al intentar procesar una petición aparentemente válida.

#### los más comunes

- 200: OK : Todo salió como lo esperado.
- 400: Bad request : La petición no cumple con lo esperado.
- 404: Not Found : El recurso buscado no existe (URL inválida).
- 500: Internal Server Error : Errór genérico del servidor al procesar una petición válida.

## ¿Qué es una API?

Es un _conjunto de reglas y especificaciones_ que describen la manera en que un sistema puede comunicarse con otros.
Definir una **API** habilita y facilita el intercambio de mensajes entre sistemas.
Puede tener interfaz gráfica o ser de uso interno, y debe estar acompañanda con la documentación detallada que describa su operación y el formato de interacción con la misma.

## ¿Qué es REST?

- **REST** viene del inglés _REpresentational State Transfer_ (Transferencia de Estado Representacional)
- Por representación nos referimos a un modelo o estructura con la que representamos algo.
- Por _Estado_ de una representación, hablamos de los datos que contiene ese modelo estructura.
- Transferir un Estado de Representación implica el envío de datos (con una determinada estructura) entre dos partes.
- Los dos formatos más utilizado para este tipo de transferencias de datos son **XML y JSON**

## ...entonces, ¿Qué es API REST?

- Es un tipo de API que no **dispone de interfaz gráfica**
- Se utiliza exclusivamente para **comunicación entre sistemas** mediante el **protocolo HTTP**
- Para que una API se considere REST, debe cumplir con las siguientes características:

1. _Arquitectura Cliente-Servidor sin estado_
2. _Cacheable_
3. _Operaciones comunes_
4. _Interfaz uniforme_
5. _Utilización de hipermedios_

# Arquitectura Cliente-Servidor sin estado

- Cada mensaje HTTP contiene toda la información necesaria para comprender la petición.
- Como resultado, ni el cliente ni el servidor necesitan recordar ningún estado de las comunicaciones entre mensajes.
- Esta restricción mantiene al **cliente** y al **servidor débilmente acoplados**: el cliente no necesita conocer los detalles de implementación del servidor y el servidor se _"desprecoupa"_ de cómo son usados los datos que envía al cliente.

## Cacheable

- Debe admitir un sistema de almacenamiento en caché.
- La infraestructura de red debe soportar una caché **de varios niveles.**
- Este almacenamiento **evita repetir** varias **conexiones** entre el servidor y el cliente, en casos en que peticiones idénticas fueran a generar la misma respuesta.

## Operaciones comunes

- Todos los recursos detrás de nuestra API deben poder ser **consumidos** mediante **peticiones HTTP**, preferentemente sus principales (POST, GET, PUT y DELETE)
- Con frecuencia estas operaciones se equiparan a las operaciones CRUD en bases de datos (en inglés: **_Create, Read, Update, Delete, en español: Alta, Lectura, Modificación y Baja_**)
- Al tratarse de peticiones HTTP, éstas deberán **devolver** con sus respuestas los correspondientes **códigos de estado**, informando el resultado de las mismas.

## Interfaz uniforme

- En un sistema REST, cada acción (más correctamente, cada recurso) debe contar con una URI (_Uniform Resource Identifier_), un identificador único.
- Ésta nos facilita el acceso a la información, tanto para consultarla, como para modificarla o eliminarla, pero también para compartir su ubicación exacta a terceros.

# {RESTful API}

- **Una aplicacción RESTful** requiere un enfoque de diseño distinto a la forma típica de pensar en un sistema: lo **contrario a RPC**
- En **RPC** basa su funcionamiento en las operaciones que puede realizar el sistema (acciones, usualmente verbos). _Ej: getUsuario()_
- en **REST**, por el contrario, el **énfasis** se pone **en los recursos** (usualmente sustantivos), especialmente en los nombres que se le asigna a cada tipo de recurso. _Ej. Usuarios_
- Cada funcionalidad relacionada con este recurso tendría sus propios identificadores y peticiones en HTTP.

## Express: atención de peticiones

- Para definir cómo se debe manejar cada tipo de petición usaremos los métodos nombrados de acuerdo al tipo de petición que manejan: **_get(), post(), delete(), y put()_**
- Todos reciben como primer argumento la ruta que van a estar escuchando, y solo _manejarán_ peticiones que coincidan en ruta y en tipo. Luego, el segundo argumento será el callback con que se manejará la petición.
- Esta tendrá dos parametros: el primero con la petición (request, o req) en sí y el segundo con la respuesta (response, o res) que deberá devolver.

#### Ejemplo de petición GET

```javascript
app.get("/api/mensajes", (req, res) => {
  console.log("request recibido");

  // acá debería obterner todos los recursos de tipo 'mensaje'

  res.json({ msg: "Hola Mundo!" });
});
```

#### Ejemplo de petición con parámetros de búsqueda

```javascript
app.get("/api/mensajes", (req, res) => {
  console.log("GET request recibido");

  if (Object.entries(req.query).length > 0) {
    res.json({
      result: "get with query params: ok",
      query: req.query,
    });
  } else {
    res.json({
      result: "get all: ok",
    });
  }
});
```

#### ... con identificador

En caso de que se quiera acceder a un recurso en particular ya conocido, es necesario **enviar un identificador unívoco** en la URL.

- Para enviar este tipo de parámetros, el mismo se escribirá luego del nombre del recurso (en la URL), separado por una barra.
  Por ejemplo: ***http://miservidor.com/api/mensajes/1***

_(En este mensaje estamos queriendo acceder al mensaje nro 1 de nuestros recursos)_

- Para acceder al campo identificador desde el lado del servidor, Express utiliza una sintaxis que permite indicar anteponiendo **'dos puntos (:)'** antes del nombre del campo identificador, al especificar la ruta escuchada. Luego, para acceder al valor del mismo, se gará a través del **campo 'params'** del objeto de petición (req) recibido en el callback.

```javascript
app.get("/api/mensajes/:id", (req, res) => {
  console.log("GET request recibido");

  // acá debería hallar y devolver el recurso con id = req.params.id, o con mejor sintaxis {id} = req.params

  res.json(elRecursoBuscado);
});
```

#### Ejemplo de petición POST (enviar)

Algunas peticiones requieren el **envío** de algún **dato** desde el **cliente hacia el servidor**. Por ejemplo, al crear un nuevo registro. Este es el caso de la petición **POST**. Para acceder al cuerpo del mensaje, incluído en la petición, lo haremos a través del campo _'body'_ del objeto petición recibido en el callback. En este caso, estamos devolviendo como respuesta el mismo registro que se envió en la petición.

```javascript
app.post("/api/mensajes", (req, res) => {
  console.log("POST request recibido");

  // acá debería crear y guardar un nuevo recurso
  // const mensaje = req.body
});
```

#### Ejemplo de petición PUT (actualizar)

También es posible mezclar varios mecanismos de pasaje de datos/parámetros, como es el caso de las peticiones de tipo PUT, en las que se desea actualizar un registro con uno nuevo.

- Se debe proveer el identificador del registro a reemplazar y el dato con el que se lo quiere sobreescribir.

```javascript
app.post("/api/mensajes-json/:id", (req, res) => {
  console.log("PUT request recibido");

  // acá se debe hallar al recurso con {id} = req.params
  // y luego reemplazarlo con el registro recibido en req.body

  res.json({
    result: "ok",
    id: req.params.id,
    nuevo: req.body,
  });
});
```

#### Ejemplo de petición DELETE (borrar)

Si quisiéramos **eliminar** un recurso, debemos **identificar unívocamente** sobre cuál de todos los disponibles se desea realizar la operación.

```javascript
app.delete("/api/mensajes-json/:id", (req, res) => {
  console.log("DELETE request recibido");

  // acá debería eliminar el recurso con {id} = req.params

  res.json({
    result: "ok",
    id: req.params.id,
  });
});
```

# ¡IMPORTANTE!

## Configuración extra

Para que nuestro servidor express pueda interpretar en forma automática mensajes de tipo **JSON** en formato **urlencoded** al recibirlos, debemos indicarlo en forma explícita, agregando las siguientes líneas luego de crearlo.

```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

**Aclaración:** _{extended:true} precisa que el objeto req.body contendrá valores de cualquier tipo en lugar de solo cadenas._
**¡Sin esta línea, el servidor no sabrá cómo interpretar los objetos recibidos!**

#### Más configuración extra

Para que nuestras respuestas de tipo json tengan un formato más prolijo y ordenado podemos ordenar las siguientes lineas en las configuraciones del server.

```javascript
app.set("json spaces", 2);
```

_Funciona como el JSON formatter, devuelve al cliente un archivo ordenado_

# Router y Multer

## Ruteo en Express

- La clase **Router** se usa para crear un nuevo objeto de enrutador, que es una instancia aislada de middleware y rutas. Se utiliza cuando se desea crear un nuevo objeto de enrutador para manejar solicitudes.
- El **Router** de express nos permite crear múltiples _"mini aplicaciones"_ para que se pueda asignar un espacio de nombre al apu público, autenticación y otras rutas en sistemas de enrutamiento separados.

```javascript
const express = require("express");
const { Router } = express;

const app = express();
const router = Router();

router.get("/recurso", (req, res) => {
  res.send("get ok");
});

router.post("/recurso", (req, res) => {
  res.send("post ok");
});

app.use("/api", router);

app.listen(8080);
```

## Introducción

- Para el servicio de archivos estáticos (imágenes, archivos CSS y JS) se utiliza la función de middleware incorporada **express.static**
- Esta función recibe como parámetro el nombre del directorio que contiene los archivos estáticos.
- El siguiente código configura el servicio de imágenes, archivos CSS y JS en un directorio llamado _"PUBLIC"_

```javascript
app.use(express.static("public"));
```

A continuación podemos cargar los archivos que hay en el directorio **public:**

_http://localhost:8080/images/kitten.jp_
_http://localhost:8080/css/styles.css_

**Nota:** _Express busca los archivos relativos al directorio estático, por lo que el nombre del directorio estático no forma parte del URL_

## Múltiples directorios

Para utilizar **varios directorios de archivos estáticos** se invoca la función de middleware express.static varias veces:

```javascript
app.use(express.static("public"));
app.use(express.static("files"));
```

**Nota:** _Express busca los archivos en el orden en el que se definen los directorios estáticos con la función de middleware express.static_

## Prefijo virtual

Para crear un **prefijo virtual** (donde el path de acceso no existe realmente en el sistema de archivos) para los archivos servidos por express.static, debemos **especificar un path de acceso de montaje** para el directorio estático:

```javascript
app.use("/static", express.static("public"));
```

## Path absoluto

El path que se proporciona a la función **express.static** es relativo al directorio desde donde inicia el proceso node.
Por eso, si ejecutamos la aplicación Express desde cualquier otro directorio, es más seguro usar el path absoluto del directorio al que desea dar servicio:

```javascript
app.use("/static", express.static(__dirname + "public"));
```

# Capas middleware

## Introducción

Las funciones Middleware son aquellas que tienen acceso al objeto de solicitud (**req**), al objeto de respuesta (**res**) y a la siguiente función de middleware en el ciclo de solicitud/respuestas de la aplicación (**next**)

- Se debe invocar a next() para pasar el control a la siguiente función de middleware. De lo contrario, la solicitud quedará colgada.

## Tipos de middleware

Una aplicación Express puede utilizar los siguientes tipos de middleware:

- **Middleware a nivel de aplicación**
- **Middleware a nivel del Router**
- **Middleware de manejo de errores**
- **Middleware incorporado**
- **Middleware de terceros**

#### Middleware de nivel de aplicación

La función se ejecuta cada vez que la aplicación recibe una solicitud.

```javascript
const app = express();

app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});
```

#### Middleware de nivel de aplicación

Se pueden **agregar una o múltiples funciones** middlewares en los **procesos de atención de las rutas**, como se muestra a continuación:

```javascript
const miMiddleware1 = (req, res, next) => {
  req.miAporte1 = "Dato aportado por el middleware 1";
  next();
};

const miMiddleware2 = (req, res, next) => {
  req.miAporte2 = "Dato aportado por el middleware 2";
  next();
};

// Ruta GET con un middleware

app.get("/miruta1", miMiddleware1, (req, res) => {
  let miAporte1 = req.miAporte1;
  res.send({ miAporte1 });
});

// Ruta GET con dos middleware

app.get("/miruta1", miMiddleware1, miMiddleware2, (req, res) => {
  let { miAporte1, miAporte2 } = req;
  res.send({ miAporte1, miAporte2 });
});
```

#### Middleware a nivel del Router

El middleware de nivel de router funciona de la misma manera que el middleware de nivel de aplicación. Excepto que está enlazado a una instancia de express.Router()

```javascript
const app = express();
const router = express.Router();

//función middleware sin vía de acceso de montaje. El código es ejecutado por cada petición al router

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});
```

#### Middleware de manejo de errores

Éstas funciones se definen de la misma forma que otras funciones de middleware, excepto que llevan cuatro argumentos en lugar de tres, específicamente con la firma _(err, req, res, next)_:

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
```

#### Middleware incorporado

La única función de middleware incorporado en Express es express.static. Esta función es responsanble del servicio de archivos estáticos:

```javascript
app.use(express.static("public", options));
```

- express.static(root, [options])

  - El **argumento root** especifica el directorio raiz desde el que se realiza el servicio de activos estáticos.
  - El **objeto options** opcional puede tener las siguientes propiedades: _dotfiles, etag, extensions, index, lastModified, maxAge, redirect, setHeaders_

#### Middleware de terceros

Podemos **instalar y utilizar middlewares de tereceros** para añadir funcionalidad a nuestra aplicación. El uso puede ser **a nivel de aplicación** o **a nivel de Router**. Por ejemplo, instalamos y usamos la función de middleware de análisis de cookies cookie-parser.

```
$ npm i cookie-parser
```

```javascript
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

// load the cookie-parsing middleware
app.use(cookieParses());
```

# Subir archivos: Multer

## ¿Qué es Multer?

- Cuando un cliente web sube un archivo a un servidor, generalmente lo envía a través de un formulario y se codifica como _multipart/form-data_
- **Multer** hace que sea fácil manipular este _multipart/form-data_ cuando tus usuarios suben archivos.

  - **Multer** es un middleware para Express
  - un middleware es una pieza de software que conecta diferentes aplicaciones o componenetes de software
  - En Express, un middleware procesa y transforma las peticiones entrantes en el servidor
  - **Multer** actúa como un ayudante al cargar archivos

### Almacenamiento con Multer

Multer ofrece la opción de almacenar archivos en el disco. Definimos una ubicación de almacenamiento para nuestros archivos.
Configuramos multer con esas opciones.

```javascript
// SET STORAGE

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldName + "-" + Date.now());
  },
});

const upload = multer({storage;storage})
```

### Subiendo un solo archivo

En el archivo index.html, definimos un atributo de acción que realiza una petición POST. Ahora necesitamos crear un punto final en la aplicación Express. Abrimos el archivo server.js y agregamos el siguiente código:

```javascript
app.post("/uploadFile", upload.single("myFile"), (req, res, next) => {
  const file = req.file;

  if (!file) {
    const error = new Error("Please, upload a file");
    error.httpStatusCode = 400;
    return next(error);
  } else {
    res.send(file);
  }
});
```

### Subiendo múltiples archivos

Cargar varios archivos con Multer es similar a cargar un solo archivo, pero con algunos cambios.

```javascript
app.post("/uploadMultiple", upload.array("myFiles", 12), (req, res, next) => {
  const files = req.files;

  if (!files) {
    const error = new Error("Please choose files");
    error.httpStatusCode = 400;
    return next(error);
  } else {
    res.send(files);
  }
});
```
