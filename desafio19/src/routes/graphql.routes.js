import { Router } from "express";
const router = Router();
import { graphqlHTTP } from "express-graphql";
import { buildSchema } from "graphql";

const schema = buildSchema(`type User {
    id: String, 
    name: String, 
    lastname: String, 
    age: Int, 
    isStudent: Boolean
}

input userData {
    id: String, 
    name: String,
    lastname: String, 
    age: Int
}

type Query {
getUserById(id: String!): User
getAllUsers: [User]
}

type Mutation {
    UpdateUserProfile(data: userData): User
}

`);

const getUserById = ({ id }) => {
  return {
    id,
    name: "Felipe",
    lastname: "Pardo",
    age: 32,
    isStudent: true,
  };
};

const UpdateUserProfile = ({ data }) => {
  console.log(data);
  return {
    id,
    name: "Felipe",
    lastname: "Pardo",
    age: 32,
    isStudent: true,
  };
};

router.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: {
      getUserById,
      UpdateUserProfile,
    },
    graphiql: true,
  })
);

export default router;
