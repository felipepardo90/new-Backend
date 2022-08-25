# CLASE 3

# Programación Sincrónica y Asincrónica

Funciones anónimas -- ¿van dentro de una variable?,¿qué son los métodos?

# Promesas : Permiten definir desde afuera de una función un bloque de código

Tiene tres (3) estados: 

Pendiente > (pending)

Una vez que se resuelve pasa a...

Cumplida > (resolve)

La operación salió bien, y su resultado será manejado por el cb asignado mediante el método .then()

Rechazada > (rejected)

La operación salió mal, y su resultado será manejado por el cb asignado mediante el método .catch()

"
Una promesa es una clase, así que se va a crear con el uso del operador new


``` Javascript
new Promise((resolve, reject))
```

"

# Ejecución sincrónica y asincrónica

Una ejecución sincrónica es cuando escribimos más de una instrucción en un programa, esperamos que las instrucciones se ejecuten comenzando desde la primera línea.

# Timers

setTimeout(cb, miliseconds) - solo corre el temporizador una sola vez
setInterval(cb, miliseconds) - corre el programa las veces que sea necesario



## MANEJO DE ARCHIVOS EN JAVASCRIPT

# Módulo FS

Es la abreviatura en inglés para File System. Es uno de los módulos más básicos y útiles de NodeJS
Con esto es posible manejar archivos (crear, leer, modificar, etc)
Para poder usar este módulo, primero debemos importarlo

``` Javascript
const fs = require("fs")

 ```

# Modo Sincrónico

Las funciones sincrónicas terminan con "Sync"
Son operaciones bloqueantes que devuelven un resultado

+ readFileSync: lectura de un archivo en forma sincrónica.

```Javascript 
const data = fs.readFileSync("./ruta-del-archivo.json", "utf-8")
```
            - El primer parámetro es un string con la ruta del archivo que queremos leer
            - El segundo parámetro indica el formato de codificación de caracteres con que fue escrito el dato que estamos leyendo ("utf-8")    

+ writeFileSync: escritura de un archivo en forma sincrónica.
```Javascript 
const data = fs.writeFileSync("./ruta-del-archivo.json", "Esto es una prueba")
```
            - El primer parámetro es un string con la ruta del archivo que queremos sobreescribir
            - El segundo parámetro indica lo que queremos escribir
            - La función admite un tercer parámetro opcional, para indicar el formato de codificación de caracteres ("utf-8")
            - Si la ruta de archivo fuera válida, pero el nombre de archivo no existiera, la función creara un nuevo archivo con el nombre provisto.
+ appendFileSync: actualización de un archivo en forma sincrónica.
```Javascript 
const data = fs.appendFileSync("./ruta-del-archivo.json", "Esto es un agregado")
```
            - El primer parámetro es un string con la ruta del archivo al que queremos agregar contenido
            - El segundo parámetro indica lo que queremos agregar
            - La función admite un tercer parámetro opcional, para indicar el formato de codificación de caracteres ("utf-8")
            - Si la ruta de archivo fuera válida, pero el nombre de archivo no existiera, la función creara un nuevo archivo con el nombre provisto.
+ unlinkSync: borrado de un archivo en forma sincrónica.
```Javascript 
const data = fs.unlinkSync("./ruta-del-archivo.json")
```
            - El único parámetro es un string con la ruta del archivo que queremos borrar
+ mkdirSync: creación de una carpeta.

# Manejo de errores

Ante una situación de error, las excepciones se lanzan inmediatamente y se pueden manejar usando try... catch.
Esta forma de capturar errores se puede utilizar en todas las funciones sincrónicas de acceso al sistema de archivos. 
```Javascript 
try{
const data = fs.readFileSync("ruta_ficticia.json")
}catch(err){
console.log(err)
}
```



