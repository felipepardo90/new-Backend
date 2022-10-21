## Creamos la base de datos ecommerce en mongo shell

``` **use ecommerce** ```

### **Creamos e insertamos** documentos (10) en la colección _products_, y _messages_

#### PRODUCTS COLLECTION

```
db.products.insertMany([
  {
    title: "Guitarra Alpujarra",
    price: 4750,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_664855-MLA27358402919_052018-O.jpg",
  },
  {
    title: "Bombo legüero",
    price: 1500,
    thumbnail:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/661/931/products/2211-d3d33073fc32fca2f416203260081526-1024-1024.jpg",
  },
  {
    title: "Violín",
    price: 3600,
    thumbnail:
      "https://solomusica.com.ar/sm2020/6606-large_default/violin-yamaha-v5sa-44.jpg",
  },
  {
    title: "Bajo",
    price: 4200,
    thumbnail:
      "https://y6v8e8y4.rocketcdn.me/wp-content/uploads/2022/08/1500x1500_template-wh-1-1.jpg",
  },
  {
    title: "Acordeón",
    price: 3900,
    thumbnail:
      "https://ar.xprostore.com/image/cache/data/imagenesweb/a5723s-650x650w.jpg",
  },
  {
    title: "Teclado piano",
    price: 2800,
    thumbnail:
      "https://th.bing.com/th/id/R.8c3966630aefa632c3d8e3bb81b3f87a?rik=nlmefOtwkSu3FQ&pid=ImgRaw&r=0",
  },
  {
    title: "Batería 5 cuerpos",
    price: 4999,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_827759-MLA49106228175_022022-O.webp",
  },
  {
    title: "Armónica",
    price: 980,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_641062-MLA26970643101_032018-O.webp",
  },
  {
    title: "Violoncello",
    price: 3210,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_709672-MLA51033791290_082022-O.webp",
  },
  {
    title: "Violoncello eléctrico",
    price: 3560,
    thumbnail:
      "https://http2.mlstatic.com/D_NQ_NP_855868-MLA49296531122_032022-O.webp",
  },
]);
```

#### MESSAGES COLLECTION

```
db.messages.insertMany([
  {
    "username": "user1@users",
    "message": "Hi Mark",
    "date": "21/10/2022, 16:37:26"
  },
  {
    "username": "user2@users",
    "message": "Hello Lucas, how are you?",
    "date": "21/10/2022, 16:39:12"
  },
  {
    "username": "user1@users",
    "message": "fine, did u know when the next class will be?",
    "date": "21/10/2022, 16:40:43"
  },
  {
    "username": "user3@users",
    "message": "Hi, i need to know too",
    "date": "21/10/2022, 16:43:23"
  },
  {
    "username": "user2@users",
    "message": "I don't know, let's ask Joseph",
    "date": "21/10/2022, 16:44:44"
  },
  {
    "username": "user2@users",
    "message": "@Joseph, did u know something?",
    "date": "21/10/2022, 16:45:06"
  },
  {
    "username": "user1@users",
    "message": "I think it's not active",
    "date": "21/10/2022, 16:47:22"
  },
  {
    "username": "user4@users",
    "message": "Hi, guys, I think friday at 5",
    "date": "21/10/2022, 16:57:34"
  },
  {
    "username": "user4@users",
    "message": "or at 3, I don't remember well",
    "date": "21/10/2022, 16:59:38"
  },
  {
    "username": "user3@users",
    "message": "Just in case I'm going to connect 10 minutes before 4",
    "date": "21/10/2022, 16:37:58"
  }
])
```

### **Listamos las colecciones**

- `db.products.find()`

- `db.messages.find()`
