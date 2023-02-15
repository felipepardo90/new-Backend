export default {
  Query: {
    product: async (parent, args, { DAOProducts }) => {
      const product = await DAOProducts.getById(args.id);
      product._id = product._id.toString();
      return product;
    },
  },
  Mutation: {},
};
