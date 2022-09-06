# CLASE 9 - Motores de Plantillas

## MVC

### Model View Controller

El controlador se encargará de obtener la plantilla desde el modelo.
Es el cerebro de estos motores, ya que aquí es donde se encuentra la lógica.

## Motores de plantilla

- Un motor de plantillas lee un archivo de texto que contiene la presentación ya preparada en un lenguaje pseudo HTML. e inserta en él la información dinámica que le ordena el "controlador"
- La sintaxis depende del motor de plantillas utilizado

### Ventajas

- El código es más organizado, y tenemos garantía de que no habrá HTML mal formado.
- Podemos separar nuestro equipo en dos, al trabajar interfaces de usuario sin necesidad de desarrollar en Backend
- Los motores de plantilla nos permiten reutilizar secciones de código ayudando a mantener nuestro proyecto optimizado.

### Desventajas

- La no utilización de un motor de plantillas puede afectar la velocidad de nuestro desarrollos de aplicaciones
- El riesgo de hacer HTML mal formado es mucho mayor
- El código resultante puede resultar difícil de documentar y de compartir con otros desarrolladores

```handlebars
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Document</title>
</head>
<body>
Hola {{nombre}}
</body>

```

## Handlebars

- Handlebars es un lenguaje de plantillas simple
- Utiliza una plantilla y un objeto de entrada para generar un HTML, u otros formatos de texto.
- Las plantillas de HBS tienen el aspecto de texto normal con expresiones de handlebars _incrustadas_
- Una expresión de HBS se compone de {{ + algunos contenidos + }}

### Implementación de HANDLEBARS desde el CDN

```HTML
<span></span> //  Para incrustar el resultado
<script src="CDN HANDLEBARS"></script>
<script>
    const template = Handlebars.compile('<h1>{{nombre}}</h1>') // Compila la plantilla
    const html = template({nombre: "Felipao"}) // Genera el HTML
    document.querySelector('span').innerHTML = html // Inyecta el resultado en la vista
</script>
```

### Creando un motor de plantillas custom para express

- Utilizamos el método

```javascript
app.engine(ext, callback);
```

para crear nuestro propio motor de plantilla. _ext_ hace referencia a la extensión de archivo y _callback_ es la función de motor de plantilla, que acepta como parámetros la ubicación del archivo, el objeto options y la función callback

- El método

```javascript
app.set("views", path);
```

especifica la carpeta de plantillas.

- El método

```javascript
app.set("view engine", name);
```

registra el motor de plantillas.

#### Ejemplo

Implementación de motor de plantilla para la representación de archivos _.coder_

```javascript
app.engine("coder", async (filePath, options, callback) => {
  // model
  const { nombre } = options;

  // views
  const template = await fs.promises.readFile(filePath, "utf-8");
  //* <h1>hola {{nombre}}</h1>

  // controller
  const rendered = template.replace("{{nombre}}", nombre);

  return callback(null, rendered);
});

app.set("views", "./views");
app.set("view engine", "coder");

app.get("/", (req, res) => {
  const data = {
    nombre: "Felipe",
  };

  res.render("index", data);
});
```

# Para usar handlebars desde el lado del SERVER

## Ejecutamos el siguiente comando

```
npm i express-handlebars
```

### Configuración

```javascript

// Cargo el módulo handlebars
const handlebars = require("express-handlebars")

// establecemos la configuración de HBS

app.engine(
  "hbs", // Nombre referencia a la plantilla (se usa luego en set)
  handlebars({ // Función de configuración HBS
    extname: ".hbs", // Extensión a utilizar (en lugar de HBS por defecto)
    defaultLayout: "index.hbs", // Plantilla principal
    layoutsDir: _dirname + "/views/layouts", // Ruta a la plantilla principal
    partialsDir: _dirname + "/views/partials", // Ruta a las plantillas parciales
  })
);

// Establecemos el motor de plantilla
app.set("view engine", "hbs");

// Establecemos directorio donde se encuentren los motores de plantillas

app.set("views", "./views");

// Espacio público del servidor
app.use(express.static("public"));
```


# CLASE 10 - Pug & Ejs