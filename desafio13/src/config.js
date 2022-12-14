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
  })
  .default({
    port: 8080,
  }).argv;

const { port } = result;

export const PORT = process.env.PORT || 8080;
export const MONGODB_URI = `mongodb+srv://${process.env.USER}:${process.env.PASS}@codercluster.exshfro.mongodb.net/sessions`;

//! PATH

const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
