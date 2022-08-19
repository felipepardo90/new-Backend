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

new Promise((resolve, reject))

"

# Ejecución sincrónica y asincrónica

Una ejecución sincrónica es cuando escribimos más de una instrucción en un programa, esperamos que las instrucciones se ejecuten comenzando desde la primera línea.

