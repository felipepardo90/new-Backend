//!  DOM ELEMENTS


let message = document.getElementById("message");
let email = document.getElementById("email");
let name = document.getElementById("name");
let lastname = document.getElementById("lastname");
let age = document.getElementById("age");
let alias = document.getElementById("alias");
let avatar = document.getElementById("avatar");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let actions = document.getElementById("actions");

//! Normalize Schema

const authorSchema = new normalizr.schema.Entity("authors");
const commentsSchema = new normalizr.schema.Entity(
  "comments",
  {
    commenter: authorSchema,
  },
  { idAttribute: 1 }
);
const posts = new normalizr.schema.Entity("posts", {
  author: authorSchema,
  messages: [commentsSchema],
});
const messagesSchema = new normalizr.schema.Entity("messages", {
  messages: [posts],
});

//! Al cliquear en SEND, se enviará un mensaje al servidor con el evento chat:message, y luego se limpiará el input message

btn.addEventListener("click", () => {
  const messages = {
    author: {
      id: email.value,
      name: name.value,
      lastname: lastname.value,
      age: age.value,
      alias: alias.value,
      avatar: avatar.value,
    },
    text: message.value,
    date: new Date().toLocaleString(),
  };

  socket.emit("chat:message", messages);
  message.value = "";
  message.focus();
  return false;
});

//! El input message escucha al evento keypress(escribiendo) para crear el evento chat:typing

message.addEventListener("keypress", () => {
  //TODO CHAT TYPING FRONT
  socket.emit("chat:typing", alias.value);
});

//! Luego de enviar mensaje por el chat, se limpiará el actions (muestra el evento chat:typing) y se renderizará el chat, obteniendo por data un Array de mensajes con el evento chat:messages

socket.on("chat:history", (data) => {

  console.log(data)
  const denormalizedMsg = normalizr.denormalize(
    data.result,
    posts,
    data.entities
  );

  // console.log(denormalizedMsg, "FRONT DATA");
  // TODO CHAT HISTORY FRONT
  actions.innerHTML = " ";
  output.innerHTML = denormalizedMsg
    .map(
      (user) =>
        `<p>
    <strong class="message-user">${user.username} <span class="message-date">[ ${user.date} ]</span></strong>: <span class="message-txt">${user.message}</span>
    </p>`
    )
    .join(" ");
  return false;
});

//! "Está escribiendo..."

socket.on("chat:typing", (data) => {
  actions.innerHTML = `<p></em>${data} Está escribiendo... </p>`;
});

/*
const authorSchema = new schema.Entity("authors");
const commentsSchema = new schema.Entity("comments", {
  commenter: authorSchema,
});
const posts = new schema.Entity("posts", {
  author: authorSchema,
  messages: [commentsSchema],
});
const messages = new schema.Entity("messages", {
  messages: [posts],
});

const normalizedMsg = normalize(data, messages);

console.log("NORMALIZED", normalizedMsg, "NORMALIZED");
console.log("INSPECT", util.inspect(normalizedMsg, false, 7, true), "INSPECT");

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

const filterMsg = messagesDatabase.filter(({messages}) => messages);
const filterInArray = filterMsg.map(
  (i) => ` AUTOR >> ${i.messages[0].author.alias}; MENSAJE >> ${i.messages[0].text}`
);
console.log(util.inspect(filterInArray, false, 6, true));
*/
