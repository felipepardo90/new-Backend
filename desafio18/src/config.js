import { config } from "dotenv";
config()


const Config = {
  mongodb: {
    url: process.env.MONGODB_URI,
    options: {
      serverSelectionTimeoutMS: 5000,
    },
  }
};

export default Config