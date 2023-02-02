import DTOProduct from "./mongo.DTO.products";

export default class DTOCart {
  constructor(products) {
    this.products = products.map((product) => DTOProduct(product));
    this.subtotal = products.reduce((prev, next) => prev + next.price, 0);
  }
}
