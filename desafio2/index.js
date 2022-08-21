const fs = require("fs");
const file = "./products.json";

class Container {
  constructor(file) {
    this.file = file;
  }

  async save(object) {
    const dataToParse = await fs.readFileSync(this.file, "utf-8");
    const dataParsed = JSON.parse(dataToParse);
    // ? ¿El producto ya existe en el archivo?
    const productFound = dataParsed.find(({ title }) => title == object.title);

    try {
      if (productFound) {
        // * Si el producto ya existe, avisa por consola y no lo agrega
        console.log("El producto ya existe");
      } else {
        // * Si no existe, lo agrega y retorna el id asignado
        object.id = dataParsed.length + 1;
        dataParsed.push(object);
        const updatedFile = JSON.stringify(dataParsed, null, " ");
        fs.writeFileSync(this.file, updatedFile);
        // ? console.log(updatedFile, "Aquí 23");
        console.log(
          `Se ha agregado el siguiente producto: ${object.title} con el id ${object.id}`
        );
        return object.id;
      }
    } catch (error) {
      console.log(`Se produjo un error ${error}`);
    }
  }

  async getById(id) {
    const dataToParse = await fs.readFileSync(this.file, "utf-8");
    const dataParsed = JSON.parse(dataToParse);
    // ? ¿El producto ya existe en el archivo?
    const idFound = dataParsed.find(({ id }) => id == id);

    try {
      if (idFound) {
        return idFound
      } else {
        null
      }
    } catch (error) {
      console.error(`Se produjo un error en getByID: ${error}`)
    }
  }

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

contenedor.save(newObject);
contenedor.getById(1)
