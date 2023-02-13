let randomList = [];
let counter = 1;
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
process.on("message", (totalQty) => {
  let num, keyNum, keyNumExists;
  for (let i = 0; i < totalQty; i++) {
    num = randomNumber(1, 1000);
    keyNum = (obj) => obj[num];
    keyNumExists = randomList.findIndex(keyNum); //! Si existe, guardara el índice como valor, sino, será -1, como lo determina el método
    keyNumExists === -1 //! -1 si no existe, si existe tomará el valor del índice
      ? randomList.push({ [num]: counter }) //! Se agrega como propiedad el número aleatorio [num] y como valor el contador inicial(1)
      : (randomList[keyNumExists][num] += counter); //! Del arreglo, se buscará el objeto con el índice y la propiedad indicados, y se modificará su valor en += 1(counter)
  }

  randomList.sort((a, b) => {
    return Object.values(b) - Object.values(a); //! Objetos ordenados por mayor número de apariciones
  });

  process.send(randomList);
  process.exit();
});
