import { config } from "dotenv";
config()

export const PORT = process.env.PORT || 8080;
export const MONGODB_URI = `mongodb://localhost:27017/sessions`;

//! PATH

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);