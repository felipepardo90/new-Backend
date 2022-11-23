import ParsedArgs from "minimist";

const options = {
  alias: { m: "modo", p: "port", d: "debug" },
  default: {
    modo: "prod",
    port: "8080",
    debug: false,
  },
};

const argv = process.argv.slice(2);
const { modo, port, debug } = ParsedArgs(argv, options);

console.log(modo, port, debug);