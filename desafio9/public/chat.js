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

  socket.emit("chat:message", data); // TODO CHAT MESSAGE FRONT
  message.value = "";
  message.focus();
  return false;
});

//! El input message escucha al evento keypress(escribiendo) para crear el evento chat:typing

message.addEventListener("keypress", () => {
  //TODO CHAT TYPING FRONT
  socket.emit("chat:typing", username.value);
});

//! Luego de enviar mensaje por el chat, se limpiará el actions (muestra el evento chat:typing) y se renderizará el chat, obteniendo por data un Array de mensajes con el evento chat:messages

socket.on("chat:history", (data) => {
  // TODO CHAT HISTORY FRONT
  actions.innerHTML = " ";
  output.innerHTML = data
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
