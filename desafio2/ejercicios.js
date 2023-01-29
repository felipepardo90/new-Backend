function mostrarLetras(palabra, fin) {
  let i = 0;
  const timer = setInterval(() => {
    console.log(palabra[i]);
    i++;
if(i > palabra.length){
    clearInterval(timer)
    fin()
}
    // i > palabra.length && fin() clearInterval(timer);
  }, 1000);
}

const fin = () => {
  console.log("terminé");
};

console.log(mostrarLetras("empezamos", fin));
