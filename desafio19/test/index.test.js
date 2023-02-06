import request from "supertest";
import api from "../src/axios.js";

/**
 * >Testing get  /api/products
 */

//! Get all products

// it("should try to get all products", (done) => {
//   request(api)
//     .get("/api/products")
//     .set("Accept", "Application/json")
//     .expect("Content-type", /html/)
//     .expect(200, done());
// });

//! Get product by id

// describe("GET product on /api/products", () => {
//   //
//   it("respond a single product with id", (done) => {
//     request(api)
//       .get("/api/products/63dfc0048c23aa71f299e603")
//       .set("Accept", "Application/json")
//       .expect("Content-type", /html/)
//       .expect(200, done());
//   });
//
//TODO Resolver para cuando no encuentra el producto
// it("respond with JSON 'product not found' when the product doesnt exist", (done) => {
//   request(api)
//     .get("/api/products/63d7c")
//     .set("Accept", "Application/json")
//     .expect("Content-type", /html/)
//     .expect(404)
//     .expect('Product not found')
//     .end((err) => {
//       if (err) return done(err);
//       done();
//     });
// });
//
// });

//! Add product

// describe("POST products on /api/products", () => {
//   it("respond with 201 item created", async (done) => {
//     const item = {
//       title: "prueba",
//       price: 11,
//       thumbnail: "prueba.jpg",
//       description: "lalalala",
//       code: "A1111",
//       stock: 1,
//     };
//     await request(api)
//       .post("/api/products")
//       .send(item)
//       .set("Accept", "Application/json")
//       .expect("Content-type", /html/)
//       .expect(201, done())
//       .end((err) => {
//         if (err) return done(err);
//         done();
//       });
//   });
// });

//! Change product

it("PUT || Modify product respond with 200", (done) => {
  const newProduct = {
    title: "Violín",
    price: 3600,
    thumbnail:
      "https://http2.mlstatic.com/violin-4-4-acustico-profesional-madera-estuche-y-accesorios-D_NQ_NP_661231-MLM31914819588_082019-F.jpg",
    description: "Violín otra vez cambiado",
    code: "A100",
    stock: 50,
  };
  request(api)
    .put("/api/products/63dfc0048c23aa71f299e603")
    .send(newProduct)
    .set("Accept", "Application/json")
    .expect(200)
    .end((err, res) => {
      if (err) return res(err);
      res();
    });
});
