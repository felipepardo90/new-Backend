import { normalize, schema, denormalize } from "normalizr";
import util from "util";

const blogspot = {
  id: "1",
  title: "My blog Spot",
  description: "Short blogspot description",
  content: "Hello World",
  author: {
    id: "1",
    name: "John Doe",
  },
  comments: [
    {
      id: "1",
      author: "Rob",
      content: "Nice post!",
    },
    {
      id: "2",
      author: "Jane",
      content: "I totally agree with you!",
    },
  ],
};

const authorSchema = new schema.Entity("authors");
const commentSchema = new schema.Entity("comments");
const postSchema = new schema.Entity("posts", {
  author: authorSchema,
  comments: [commentSchema],
});

const normObj = normalize(blogspot, postSchema);
// console.log(postSchema)
console.log(normObj);
console.log(util.inspect(normObj, false, 12, true))
// console.log(`normalize: ${JSON.stringify(normObj).length}`)

// const denormObj = denormalize(normObj.result, postSchema, normObj.entities)

// console.log(`denormaliza: ${JSON.stringify(denormObj).length}`)

//! EXPRESS SESSION

// import express from "express"
// import session from "express-session"
// import fileStore from "session-file-store"

// const app = express()

// const fileStoreSession = fileStore(session)

// app.use(session({
//   secret: "33458asdsad3354asda8a",
//   store: new fileStoreSession({path:'./sessions', ttl:3600, retries:1})
// }))
