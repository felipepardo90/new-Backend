import { Router } from "express";
const router = Router();
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";
import typeDefinitions from "./products.schema.js";
import resolvers from "./products.resolvers.js";

const productsSchema = buildSchema(typeDefinitions);

router.use(
  "/graphql",
  graphqlHTTP({
    schema: productsSchema,
    rootValue: resolvers,
    graphiql: true,
  })
);

export default router;
