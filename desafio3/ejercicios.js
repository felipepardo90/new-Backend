// const numbers = {}

// const aleatoryNum = ()=>{

//     return parseInt((Math.random()*20)+1)
// }

// console.log(aleatoryNum())

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

///* EXPRESS

const express = require("express")
const app = express()


app.get("/", (req, res)=>{
    res.send("<h1 style='color:blue'> Bienvenidos al servidor express </h1>")
})

let contador = 0

app.get("/visitas", (req, res)=>{
    contador++
    res.send(`Eres el visitante nro ${contador}`)
})

app.get("/fyh", (req, res)=>{
    const fecha = new Date()
    res.send({fecha: fecha.toLocaleString()})
})






const server = app.listen(8080, ()=>{
    console.log("Servidor express iniciado en el puerto 8080")
})

server.on("error", (error)=>{
    console.log(`Error !!!: ${error}`)
})