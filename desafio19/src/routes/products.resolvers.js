export default {
  Query: {
    getProductById: async (parent, args, { DAOProducts }) => {
      const products = await DAOProducts.getById();
      return products.map((item) => {
        item._id = item._id.toString();
        return item;
      });
    },
  },
  Mutation: {},
};
