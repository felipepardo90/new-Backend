import { faker } from "@faker-js/faker";
faker.locale = "es_MX";
console.log(faker.name.firstName("male"));
