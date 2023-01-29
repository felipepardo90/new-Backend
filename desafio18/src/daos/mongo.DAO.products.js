import DTOProduct from "../dto/mongo.DTO.products.js";
import MongoContainer from "../models/Mongo Pers/Container.js";

class DAOProductsMongo extends MongoContainer {
  constructor() {
    super("products", {
      title: String,
      price: Number,
      thumbnail: String,
      description: String,
      code: String,
      stock: Number,
      timestamp: String,
    });
  }

  async getById(id) {
    const data = await super.getById(id);
    return new DTOProduct(data);
  }
}

export default DAOProductsMongo;
s;
