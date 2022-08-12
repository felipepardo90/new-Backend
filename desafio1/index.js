class User {
  constructor(name, lastname, books, pets) {
    this.name = name;
    this.lastname = lastname;
    this.books = books;
    this.pets = pets;
  }
  getFullName(name, lastname) {
    return `Nombre completo: ${name}, ${lastname}`;
  }
  addPet(newPet) {
    this.pets.push(newPet);
  }
  countPets() {
    console.log(`Cantidad de mascotas: ${this.pets.length}`)
    return this.pets.length;
  }
  addBook(name, author) {
    this.books.push({ name, author });
  }
  getBookNames() {
    return this.books.map(({ name }) => name);
  }
}

let pets = ["dog", "cat"];
let books = [
  {
    name: "El hombre en busca de sentido",
    author: "Victor Frankl",
  },
  {
    name: "La vuelta al día en 80 mundos",
    author: "Julio Cortázar",
  },
];

let user = new User("Felipe", "Pardo", books, pets);

user.addPet("fish"); // Agrega nueva mascota
user.addBook("1984", "George Orwell"); // Agrega un libro

console.log(user);
console.log(user.countPets()) // Cuenta la cantidad de mascotas)
console.log(user.getBookNames()) // Retorna nombres de los libros