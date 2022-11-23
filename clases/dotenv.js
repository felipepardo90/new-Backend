import * as dotenv from "dotenv";
dotenv.config({
  path: "development.env",
});

const modo = process.env.MODO || "prod";
const debug = process.env.DEBUG === "true";
const puerto = Number(process.env.PORT ?? 0);

console.log(modo, debug, puerto);

//* MODO="dev" PORT=8080 -script-

import Yargs from "yargs/yargs";

const argv = process.argv.slice(2);

const result = Yargs(argv)
  .alias({ d: "entorno" })
  .default({ d: "production" }).argv;

dotenv.config({
  path:
    result.entorno == "development" ? "./development.env" : "./production.env",
});
