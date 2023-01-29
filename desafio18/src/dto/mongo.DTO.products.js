const DTOProduct = (product) => {
  return {
    title:product.title,
    price:product.price,
    thumbnail:product.thumbnail,
    description:product.description,
    code:product.code,
    stock:product.stock,
    timestamp:product.timestamp,
    id: product.id,
  };
};
export default DTOProduct;
