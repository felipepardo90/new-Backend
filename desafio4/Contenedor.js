class Container {
  constructor(array) {
    this.array = array;
  }

  // ? Recibe un objeto, lo guarda en el array y devuelve el id asignado ////

  async save(object) {
    try {
      // const dataToParse = await fs.promises.readFile(this.array, "utf-8");
      // const dataParsed = JSON.parse(dataToParse);
      // * ¿El producto ya existe en el archivo?
      const productFound = this.array.find(
        ({ title }) => title === object.title
      );

      if (productFound) {
        // * Si el producto ya existe, retorna null
        return null;
      } else {
        // * Si no existe, lo agrega y retorna el objeto con id asignado
        object.id = this.array.length + 1;
        this.array.push(object);
        // const updatedFile = JSON.stringify(dataParsed, null, " ");
        // fs.promises.writeFile(this.array, updatedFile);
        return object;
      }
    } catch (error) {
      console.error(`Se produjo un error en save:${error}`);
    }
  }

  // ? Recibe un id y modifica el objeto con ese id, por un nuevo objeto ingresado

  async update(idEntered, object) {
    try {
      // * Se filtran los productos que no cumplen las condiciones (coincidir con el id proporcionado)
      const leakedID = this.array.filter(({ id }) => id != idEntered);
      // * Encuentra el producto con el id proporcionado
      const idFound = this.array.find(({ id }) => id == idEntered);
      // // * ¿El producto ya existe en el archivo?
      // const productFound = this.array.find(
      //   ({ title }) => title === object.title
      // );

      if (idFound) {
        const idFound = { ...object, id: idEntered };
        leakedID.push(idFound);
        this.array = leakedID;
        console.log(`Producto ${idEntered} modificado con éxito`, idFound);
        return idFound;
      } else {
        return null;
      }
    } catch (error) {
      console.error(`Se produjo un error en saveById:${error}`);
    }
  }

  // ? Recibe un id y devuelve el objeto con ese id, o null si no está  /////////

  async getById(idEntered) {
    try {
      // const dataToParse = await fs.promises.readFile(this.array, "utf-8");
      // const dataParsed = JSON.parse(dataToParse);
      // * ¿El producto ya existe en el archivo?
      const idFound = this.array.find(({ id }) => id == idEntered);

      if (idFound) {
        console.log(`Se obtuvo el producto ${idFound.title}`);
        return idFound;
      } else {
        console.log("No se han encontrado productos");
      }
    } catch (error) {
      console.error(`Se produjo un error en getByID: ${error}`);
    }
  }

  // ? Devuelve un array con los objetos presentes en el archivo /////////////////

  async getAll() {
    try {
      // const dataToParse = await fs.promises.readFile(this.array, "utf-8");
      // const dataParsed = JSON.parse(dataToParse);

      if (this.array.length > 0) {
        // console.log(this.array);
        return this.array;
      } else {
        console.log("No hay elementos disponibles");
      }
    } catch (error) {
      console.error(`Se ha producido un error en getAll: ${error}`);
    }
  }

  // ? Elimina del archivo el objeto con el Id buscado /////////////////////////////

  async deleteById(idEntered) {
    try {
      // const dataToParse = await fs.promises.readFile(this.array, "utf-8");
      // const dataParsed = JSON.parse(dataToParse);
      // * Se filtran los productos que no cumplen las condiciones (coincidir con el id proporcionado)
      const leakedID = this.array.filter(({ id }) => id != idEntered);
      // * Encuentra el producto con el id proporcionado
      const idFound = this.array.find(({ id }) => id == idEntered);

      if (idFound) {
        console.log(
          `Se ha eliminado el objeto con id:${idEntered} >> [[${idFound.title}]]`
        );
        // * Se actualiza el archivo
        // const updatedFile = JSON.stringify(leakedID, null, " ");
        // fs.promises.writeFile(this.array, updatedFile);
        this.array = leakedID;
        return idFound;
      } else {
        console.log(`No se ha encontrado el objeto con id: ${idEntered}`);
      }
    } catch (error) {
      console.error(`Se ha producido un error en deleteById: ${error}`);
    }
  }

  // ? Elimina todos los objetos presentes en el archivo ///////////////////////////////

  async deleteAll() {
    try {
      console.log("Todos los objetos fueron eliminados");
      // * Borrado de todos los objetos (Se sobreescribe el archivo a un array vacío)
      await fs.promises.writeFile(this.array, "[]");
    } catch (error) {
      console.error(`Se ha producido un error en deleteAll: ${error}`);
    }
  }
}

module.exports = Container;
