import DTOCart from "./mongo.DTO.carts";

export default class DTOUserCart {
  constructor(user, cart) {
    this.username = user.username;
    this.phone = user.phone;
    this.cart = new DTOCart(cart);
  }
}
