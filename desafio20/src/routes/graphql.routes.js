import { Router } from "express";
const router = Router();
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import { DAOProducts } from "../daos/DAO.Factory.js";
import typeDef from "./products.schema.js";

const productsSchema = buildSchema(typeDef);

async function getProductById({ id }) {
  console.log(await DAOProducts.getById("635322adedbfa68cab085f35"));
  const product = await DAOProducts.getById(id);
  return product;
}

async function getAllProducts() {
  console.log(await DAOProducts.getAll());
  // const product = await DAOProducts.getById(id);
  // product._id = product._id.toString();
  // return product;
}


router.use(
  "/graphql",
  graphqlHTTP({
    schema: productsSchema,
    rootValue: { getProductById, getAllProducts },
    graphiql: true,
  })
);

export default router;
