import Yargs from "yargs/yargs"

const options = {
  alias: { m: "modo", p: "port", d: "debug" },
  default: {
    modo: "prod",
    port: "8080",
    debug: false,
  },
};

const argv = process.argv.slice(2);

const result = Yargs(argv)

const {modo, port, debug} = result
.boolean("debug")
.alias(options.alias)
.default(options.default).argv

console.log({nombre, entorno})