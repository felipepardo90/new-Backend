let randomList = [];
let counter = 1;
function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
process.on("message", (totalQty) => {
  let num, keyNum, keyNumExists;
  for (let i = 0; i < totalQty; i++) {
    num = randomNumber(1, 1000);
    keyNum = (obj) => obj[num];
    keyNumExists = randomList.findIndex(keyNum);
    keyNumExists === -1
      ? randomList.push({ [num]: counter })
      : (randomList[keyNumExists][num] += counter);
  }

  process.send(randomList);
});
