import request from "supertest";
import app from "../src/app.js";

/**
 * >Testing get all products
 */

it("should try to get all products", (done) => {
  request(app)
    .get("/api/products")
    .set("Accept", "Application/json")
    .expect("Content-type", /html/)
    .expect(200, done);
});

describe("GET product on /api/products", () => {
  //
  it("respond a single product with id", (done) => {
    request(app)
      .get("/api/products/63d7cf01d1a8c39206c7314b")
      .set("Accept", "Application/json")
      .expect("Content-type", /json/)
      .expect(200, done);
  });
  //
  it("respond with JSON 'product not found' when the product doesnt exist", (done) => {
    request(app)
      .get("/api/products/63d7c")
      .set("Accept", "Application/json")
      .expect("Content-type", /json/)
      .expect(404)
      .expect('"Product not found"')
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  //
});

describe("POST products on /api/products", () => {
  it("respond with 201 item created", (done) => {
    const item = {
      title: "prueba",
      price: 11,
      thumbnail: "prueba.jpg",
      description: "lalalala",
      code: "A1111",
      stock: 1,
    };
    request(app)
      .post("/api/products")
      .send(item)
      .set("Accept", "Application/json")
      .expect("Content-type", /html/)
      .expect(201)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});
