let randomList = [];
function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
process.on("message", (totalQty) => {
  let num, keyNumExists;
  for (let i = 0; i < totalQty; i++) {
    num = randomNumber(1, 1000);
    keyNumExists = randomList.findIndex((obj) => obj[num] === num);
    keyNumExists === -1
      ? randomList.push({ [num]: 1 })
      : (randomList[keyNumExists][num] += 1);
  }
  process.send(randomList);
});
//TODO cambiar esto
