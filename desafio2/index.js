const fs = require("fs");
const { json } = require("stream/consumers");
const file = "./products.json";

class Container {
  constructor(file) {
    this.file = file;
  }

  async save(object) {
    const dataToParse = await fs.readFileSync(this.file, "utf-8");
    const dataParsed = JSON.parse(dataToParse);
    // ? console.log(dataToParse)
    // ? console.log(dataParsed)

    try {
      object.id = dataParsed.length + 1;
      dataParsed.push(object);
      const updatedFile = JSON.stringify(dataParsed, null, " ");
      fs.writeFileSync(this.file, updatedFile);
      // ? console.log(updatedFile, "Aquí 23");
      console.log(object)
      return object.id;
    } catch (error) {
      console.log(`Se produjo un erro ${error}`);
    }
  }

  getById(id) {}

  getAll() {}

  deleteById() {}

  deleteAll() {}
}

const contenedor = new Container(file);

let newObject = {
  title: "Violín",
  price: 74500,
  thumbnail:
    "https://th.bing.com/th/id/R.d17cfb95d1f5b067f573e89e4ab70e98?rik=okWe3Nn%2b3DZhpg&pid=ImgRaw&r=0",
};

console.log(contenedor.save(newObject));
