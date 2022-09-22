//!  DOM ELEMENTS

let message = document.getElementById("message");
let username = document.getElementById("username");
let btn = document.getElementById("send");
let output = document.getElementById("output");
let actions = document.getElementById("actions");

btn.addEventListener("click", () => {
  
  socket.emit("chat:message", {
    username: username.value,
    message: message.value,
  });
  message.value = " ";
  message.focus();
});


message.addEventListener("keypress", () => {
  socket.emit("chat:typing", username.value);
});


socket.on("chat:message", (data) => {
  actions.innerHTML = " ";
  output.innerHTML += `<p>
    <strong class="message-user">${
      data.username
    } <span class="message-date">[ ${new Date().toLocaleString()} ]</span></strong>: <span class="message-txt">${
    data.message
  }</span>
    </p>`;
});

socket.on("chat:typing", (data) => {
  actions.innerHTML = `<p></em>${data} is typing a message </p>`;
});
