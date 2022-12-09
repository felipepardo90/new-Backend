let counter = 0;

process.on("message", (msg) => {
  console.log("msg padre", msg);
  process.send({ contador: ++counter });
});
