import { MONGODB_URI } from "../../config";

const Config = {
  mongodb: {
    url: MONGODB_URI,
    options: {
      serverSelectionTimeoutMS: 10000,
    },
  },
};

export default Config;