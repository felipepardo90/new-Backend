import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});
// try {
//   const data = await api.get("/api/products");

//   console.log(data.data);
// } catch (error) {
//   console.log(error);
// }

const getProductById = async (id) => {
  return await api.get(`/api/products/${id}`);
};

console.log(await getProductById("63d7cf01d1a8c39206c7314b"));
