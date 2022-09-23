const socket = io();

const form = document.querySelector("#products-form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const thumbnail = document.querySelector("#thumbnail");

async function render(products) {
  //? renderizar handlebars
  const response = await fetch("./form.products.hbs");
  const template = await response.text();

  products.forEach((product) => {
    const HBStemplate = Handlebars.compile(template);
    const html = HBStemplate(product);
    document.querySelector("#output-products").innerHTML += html;
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  socket.emit("new-product", {
    title: title.value,
    price: price.value,
    thumbnail: thumbnail.value,
  });

  title.value = "";
  price.value = "";
  thumbnail.value = "";

});

socket.on("get-products", (products) => { //! Obtendrá todos los productos
  // console.log(products)
  render(products);
});


socket.on("new-product", (data) => { //! Informará mediante un alert cuando se agregue un producto nuevo, o si ya existe
  data != null
    ? alert(`Ya existe el producto ${data.title} en el sistema`)
    : alert(`Se ha agregado el producto ${data.title}`);
});
