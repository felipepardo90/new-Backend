import Yargs from "yargs/yargs";
// const yargs = Yargs(process.argv.slice(2));
// const result = yargs
//   .alias({
//     d: "entorno",
//     n: "nombre",
//   })
//   .default({
//     nombre: "default",
//     entorno: "default",
//   }).argv;

// const { nombre, entorno } = result;
// console.log({ nombre, entorno });

const yargs = Yargs(process.argv.slice(2));
const result = yargs
  .alias({
    p: "port",
  })
  .default({
    port: 8080,
  }).argv;

const { port } = result;
console.log({ port });
