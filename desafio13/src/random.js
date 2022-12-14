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

//! Probando todavía

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// let total = [];
// let counter = 0;
// for (let i = 0; i < 10; i++) {
//   let num = randomNumber(1, 10);
//   let keyNumExists = total.findIndex((obj) => obj[num] === num);
//   console.log(keyNumExists);
//   keyNumExists === -1
//     ? total.push({ [num]: counter++ }) //TODO arreglar esto
//     : total.push({ [num]: 1 });
//   // total.find(({ num }) => {
//   //   num === num ? total.push({ [num]: ++counter }) : total.push({ [num]: 1 });
//   // });
// }
// console.log("total", total);
