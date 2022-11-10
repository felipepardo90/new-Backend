// import { normalize, schema, denormalize } from "normalizr";
// import util from "util"

// const blogspot = {
//   id: "1",
//   title: "My blog Spot",
//   description: "Short blogspot description",
//   content: "Hello World",
//   author: {
//     id: "1",
//     name: "John Doe",
//   },
//   comments: [
//     {
//       id: "1",
//       author: "Rob",
//       content: "Nice post!",
//     },
//     {
//       id: "2",
//       author: "Jane",
//       content: "I totally agree with you!",
//     },
//   ],
// };

// const authorSchema = new schema.Entity("authors")
// const commentSchema = new schema.Entity("comments")
// const postSchema = new schema.Entity("posts",{
//   author: authorSchema,
//   comments: [commentSchema]
// })

// const normObj = normalize(blogspot, postSchema)
// // console.log(postSchema)
// console.log(`normalize: ${JSON.stringify(normObj).length}`)

// const denormObj = denormalize(normObj.result, postSchema, normObj.entities)

// console.log(`denormaliza: ${JSON.stringify(denormObj).length}`)

let messages = [
  {
    name: "Felipe",
    mail: "felipao@felipao",
    tel: 1231234,
  },
];

let nuevoMje = {
  name: "Prueba",
  mail: "maildeprueba@",
  tel: 1135451,
  id:4
};

// !nuevoMje.id ? (nuevoMje.id = 1) : nuevoMje.id++;
// messages.push(nuevoMje);

console.log(messages.length);
