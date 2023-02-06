import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

//? Obtener todos los productos

// try {
//   const data = await api.get("/api/products/");

//   console.log(data.data);
// } catch (error) {
//   console.log(error);
// }

//? Obtener un producto por id

// try {
//   const getProductById = async (id) => {
//     return await api.get(`/api/products/${id}`);
//   };

//   console.log(await getProductById("63dfc0048c23aa71f299e603"));
// } catch (error) {
//   console.log(error);
// }

//? Modificar un producto

try {
  // const newProduct = {
  //   title: "Violín",
  //   price: 3600,
  //   thumbnail:
  //     "https://http2.mlstatic.com/violin-4-4-acustico-profesional-madera-estuche-y-accesorios-D_NQ_NP_661231-MLM31914819588_082019-F.jpg",
  //   description: "Violín cambiado",
  //   code: "A100",
  //   stock: 50,
  // };
  const editProduct = async (id, newValue) => {
    return await api.put(`/api/products/${id}`, newValue);
  };

  console.log(await editProduct("63dfc0048c23aa71f299e603", newProduct));
} catch (error) {
  console.log(error);
}

//? Agregar un producto

// try {
//   const newProduct = {
//     title: "PRUEBA",
//     price: 5000,
//     thumbnail:
//       "PRUEBA",
//     description: "PRUEBA",
//     code: "PRUEBAA",
//     stock: 100,
//   };
//   const addProduct = async (product) => {
//     return await api.post(`/api/products/`, product);
//   };

//   console.log(await addProduct(newProduct));
// } catch (error) {
//   console.log(error);
// }

//? Borrar un producto

// try {
//   const deleteProductById = async (id) => {
//     return await api.delete(`/api/products/${id}`);
//   };

//   console.log(await deleteProductById("63e032d524be4941e3f73358"));
// } catch (error) {
//   console.log(error);
// }

export default api;
