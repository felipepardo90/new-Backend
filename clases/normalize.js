import { normalize, schema, denormalize } from "normalizr";
import util from "util";

const data = {
  id: 1,
  messages: [
    {
      id: "messages",
      author: {
        id: "fabiola@",
        name: "Fabiola",
        lastname: "Maray",
        age: "29",
        alias: "fabii",
        avatar: "famaray",
      },
      text: "HOla holaaa",
      date: "16/11/2022, 15:36:26",
    },
  ],
};

const authorSchema = new schema.Entity("authors");
const commentsSchema = new schema.Entity(
  "comments",
  {
    commenter: authorSchema,
  },
  { idAttribute: 1 }
);
const posts = new schema.Entity("posts", {
  author: authorSchema,
  messages: [commentsSchema],
});
const messages = new schema.Entity("messages", {
  messages: [posts],
});

const normalizedMsg = normalize(data, messages);

// console.log("INSPECT", util.inspect(normalizedMsg, false, 7, true), "INSPECT");

const denormalizedMsg = denormalize(
  normalizedMsg.result,
  messages,
  normalizedMsg.entities
);

console.log("DENORMALIZED", denormalizedMsg, "DENORMALIZED");
console.log(
  "INSPECT",
  util.inspect(denormalizedMsg, false, 7, true),
  "INSPECT"
);


//* COPIAAAAAAR ESTOOOO

import { normalize, schema, denormalize } from "normalizr";
import util from "util";

const data = [{
  id:"1",
  author: {
    id: "felipao@",
    name: "Felipe",
    lastname: "Pardo",
    age: 32,
    alias: "felipao",
    avatar: "feli.avatar",
  },
  text: "Hola, Holaaaa",
  date: new Date().toLocaleString(),
}, {
  id:"2",
  author: {
    id: "fabiola@",
    name: "Fabiii",
    lastname: "Maray",
    age: 29,
    alias: "test",
    avatar: "test",
  },
  text: "Hola,cómo estás",
  date: new Date().toLocaleString(),
}];

// const authorSchema = new schema.Entity("authors");
// const authorSchema = new schema.Entity("authors",{}, {idAttribute: "email"});
const authorSchema = new schema.Entity("authors");
const commentSchema = new schema.Entity("comments");
const authors = [authorSchema]

//* NORMALIZE
const normalizedMsg = normalize(data, authors);
console.log(
  ">---------------",
  util.inspect(normalizedMsg, false, 8, true),
  // normalizedMsg,
  ">--------------->"
);
// const normObj = normalize(blogspot, postSchema);
// console.log(postSchema)
// console.log(normObj);
// console.log(util.inspect(normObj, false, 12, true))
// console.log(`normalize: ${JSON.stringify(normObj).length}`)

//*

//* DENORMALIZE

// const denormalized = denormalize(
//   normalizedMsg.result,
//   authors,
//   normalizedMsg.entities
// );
// console.log(
//   ">---------------",
//   console.log(denormalized),
//   util.inspect(denormalized, false, 8, true),
//   ">--------------->"
// );
// console.log(`denormaliza: ${JSON.stringify(denormObj).length}`)

//*
