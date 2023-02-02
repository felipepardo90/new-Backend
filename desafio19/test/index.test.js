import request from "supertest";
import app from "../src/app.js";

/**
 * >Testing get all products
 */

it("should try to get all products", (done) => {
  request(app)
    .get("/api/products")
    .set("Accept", "Application/json")
    .expect("Content-type", /json/)
    .expect(200, done);
});
