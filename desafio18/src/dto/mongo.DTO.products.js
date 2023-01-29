const ProductDTO = ({ _id, name, price, imageUrl, description, stock }) => {
  return {
    name,
    price,
    image,
    description,
    stock,
    id: _id,
  };
};
export default ProductDTO;
