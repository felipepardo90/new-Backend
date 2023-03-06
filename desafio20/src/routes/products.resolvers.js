import { DAOProducts } from "../daos/DAO.Factory.js";

export default {
  /** QUERY */

  getProductById: async function ({ id }) {
    if ((await DAOProducts.getById(id)) == null) {
      throw new Error("Product not found");
    }
    return await DAOProducts.getById(id);
  },

  getAllProducts: async function () {
    const allProducts = await DAOProducts.getAll();
    if (allProducts.length === 0) {
      throw new Error("There are no products here");
    }
    return allProducts;
  },

  /** MUTATION */

  saveProduct: async function ({ data }) {
    return await DAOProducts.save(data);
  },
  updateProduct: async function ({ id, data }) {
    if ((await DAOProducts.getById(id)) == null) {
      throw new Error("Product not found");
    }
    await DAOProducts.update(id, data);
    return await DAOProducts.getById(id);
  },
  deleteProduct: async function ({ id }) {
    const deletedCart = await DAOProducts.getById(id);
    await DAOProducts.deleteById(id);
    return deletedCart;
  },
};
