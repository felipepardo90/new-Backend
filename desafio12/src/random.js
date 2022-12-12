let counter = 0;
let numberList = [];
function randomNumber(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
process.on("message", (totalQty) => {
  let num;
  for (let i = 0; i < totalQty; i++) {
    num = randomNumber(1, 1000);
    numberList.push(num);
  }
  console.log(numberList);
  process.send(total);
});
//TODO cambiar esto


