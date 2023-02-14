import { Router } from "express";
const router = Router();
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import typeDef from "./products.schema.js";
import { DAOProducts } from "../daos/DAO.Factory.js";

const productsSchema = buildSchema(typeDef);

router.use(
  "/graphql",
  graphqlHTTP({
    schema: productsSchema,
    rootValue: { DAOProducts },
    graphiql: true,
  })
);

export default router;
