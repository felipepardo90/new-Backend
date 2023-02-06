import request from "supertest";
import api from "../src/axios.js";

/**
 * >Testing get  /api/products
 */

/**
 * Para pruebas
 */

const newProduct = {
  title: "Violín",
  price: 3600,
  thumbnail:
    "https://http2.mlstatic.com/violin-4-4-acustico-profesional-madera-estuche-y-accesorios-D_NQ_NP_661231-MLM31914819588_082019-F.jpg",
  description: "Violín otra vez cambiado",
  code: "A100",
  stock: 50,
};

//! Get all products

// describe("get all /api/products/ ", () => {
//   it("should try to get all products", async (done) => {
//     await request(api)
//       .get("/api/products")
//       // .auth("Felipe", "123456")
//       .set("Accept", "Application/json")
//       .expect("Content-type", /json/)
//       .expect(200, done());
//   });
// });

//! Get product by id

// describe("GET product on /api/products", () => {
//   //
//   it("respond a single product with id", (done) => {
//     request(api)
//       .get("/api/products/63d810826edc965e178c6832")
//       .set("Accept", "Application/json")
//       .expect("Content-type", /json/)
//       .expect(200, done());
//   });

//   // TODO Resolver para cuando no encuentra el producto

//   it("respond when the product doesnt exists on /api/products", (done) => {
//     request(api)
//       .get("/api/products/aleatoryId")
//       .set("Accept", "Application/json")
//       .expect("Content-type", /json/)
//       .expect(404)
//       .expect({ error: "Producto no encontrado" })
//       .end((err) => {
//         if (err) return done(err);
//         done();
//       });
//   });
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

// it("PUT || Modify product respond with 200", async (done) => {
//   await request(api)
//     .put("/api/products/63d816ef8d0c6320ba40406e")
//     .send(newProduct)
//     .set("Accept", "Application/json")
//     .expect(200)
//     .end((err) => {
//       if (err) return done(err);
//       done();
//     });
// });
