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

