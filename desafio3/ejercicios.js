
//////////////////////////////////// !

//* PROMISES

const fs = require("fs");

// file system para promesas se aloja en fs.promises
const FSPromesas = fs.promises;

function leerDatos() {
  fs.promises
    .readFile("data.json", "utf-8")
    // * Respuesta positiva / promesa fue resulta
    .then((data) => console.log("[Repuesta positiva]", data))
    // ! Respuesta negativa / promesa fue rechaza
    .catch((err) => console.log("[ERROR]", err))
    .finally(() => console.log("archivo leido"));
}

async function escribirDatosawait(data) {
  try {
    await fs.promises.writeFile("coder.json", data);
    console.log("Archivo escrito");
  } catch (e) {
    console.log("error!");
  }
}

function escribirArchivo(valor, nombre) {
  // sobreescribir contenido
  fs.promises
    .writeFile(nombre + ".json", valor)
    .then((info) => console.log("Archivo escrito"))
    //
    .catch((error) => console.log("Archivo no escrito"))

    .finally(() => console.log("terminado"));
}

function agregarArchivo(valor, nombre) {
  fs.promises
    .appendFile(nombre + ".json", valor)
    .then((info) => console.log("Archivo escrito"))
    //
    .catch((error) => console.log("Archivo no escrito"))

    .finally(() => console.log("terminado"));
}

function renombrarArchivo(nuevoNombre, archivo) {
  fs.promises
    .rename(archivo, nuevoNombre)
    .then((info) => console.log("Archivo escrito"))
    //
    .catch((error) => console.log("Archivo no escrito"))

    .finally(() => console.log("terminado"));
}

async function leerDatosawait() {
  try {
    // * .then()
    const data = await fs.promises.readFile("dat.json", "utf-8");
    console.log("[Repuesta positiva]", data);
    console.log("hola");
  } catch (error) {
    // * .catch()
    console.log("[ERROR]", error);
  }
}

escribirDatosawait("hola mundo!!!!!!!!");

////////////////////////////////////////////////!

//* GENERAR NUM ALEATORIO

// const numeros = {};
// function numAleatorio(num) {
//   // * 1-20
//   return parseInt(Math.random() * num) + 1;
// }

// for (let i = 0; i < 10000; i++) {
//   const alAzar = numAleatorio(20);
//   if (!numeros[alAzar]) {
//     numeros[alAzar] = 0;
//   }
//   numeros[alAzar]++;
// }
// console.log(numeros);

//////////////////////////////////////////!

// //* CALCULAR FECHA ACTUAL DEFERENCIA DE AÑOS Y DÍAS CON NUESTRA FECHA DE NACIMIENTO

// const moment = require("moment");

// // fecha
// const today = moment();
// // fecha inicial
// const birthday = moment("14/08/1990", "DD/MM/YYYY");

// const diffY = today.diff(birthday, "years");

// const diffD = today.diff(birthday, "days");

// console.log(`Hoy es ${today.format("DD/MM/YYYY")}`);
// console.log(`Nací el ${birthday.format("DD/MM/YYYY")}`);
// console.log(`Desde mi nacimiento han pasado ${diffY} años`);
// console.log(`Desde mi nacimiento han pasado ${diffD} dias`);

////////////////////////////////////////// !

///* HTTP

// const http = require("http");
// const server = http.createServer((req, res) => {
//   const date = new Date();
//   const hora = date.getHours();
 
// });

// const serverConnect = server.listen(8080, () => {
//   console.log("Servidor Activo");
// });

////////////////////////////////////////// !

// ///* EXPRESS

// const express = require("express")
// const app = express()


// app.get("/", (req, res)=>{
//     res.send("<h1 style='color:blue'> Bienvenidos al servidor express </h1>")
// })

// let contador = 0

// app.get("/visitas", (req, res)=>{
//     contador++
//     res.send(`Eres el visitante nro ${contador}`)
// })

// app.get("/fyh", (req, res)=>{
//     const fecha = new Date()
//     res.send({fecha: fecha.toLocaleString()})
// })






// const server = app.listen(8080, ()=>{
//     console.log("Servidor express iniciado en el puerto 8080")
// })

// server.on("error", (error)=>{
//     console.log(`Error !!!: ${error}`)
// })