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

**Aclaración:** *{extended:true} precisa que el objeto req.body contendrá valores de cualquier tipo en lugar de solo cadenas.*
**¡Sin esta línea, el servidor no sabrá cómo interpretar los objetos recibidos!**

#### Más configuración extra

Para que nuestras respuestas de tipo json tengan un formato más prolijo y ordenado podemos ordenar las siguientes lineas en las configuraciones del server.

```javascript
app.set("json spaces", 2);
```

*Funciona como el JSON formatter, devuelve al cliente un archivo ordenado*

# Router y Multer

