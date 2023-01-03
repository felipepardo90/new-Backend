import path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";
import Yargs from "yargs/yargs";
config();

//! YARGS

const yargs = Yargs(process.argv.slice(2));
const result = yargs
  .alias({
    p: "port",
    m: "method",
  })
  .default({
    port: 8080,
    method: "FORK",
  }).argv;

const { port, method } = result;
export const METHOD = method;
export const PORT = process.env.PORT || port;
export const MONGODB_URI = `mongodb://localhost:27017/sessions`;
// ? export const MONGODB_URI = `mongodb+srv://${process.env.USER}:${process.env.PASS}@codercluster.exshfro.mongodb.net/sessions`;

//! PATH

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
