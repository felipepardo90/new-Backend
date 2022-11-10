import { faker } from "@faker-js/faker";
faker.locale = "es_MX";
const { image, commerce } = faker;
let product = [];
for (let i = 1; i <= 5; i++) {
  product.push({
    title: `${faker.commerce.productName()}`,
    price: `${faker.commerce.price(100, 500)}`,
    thumbnail: `${faker.image.imageUrl()} `,
  });
}
console.log(product);
