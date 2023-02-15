export default `

type Product {

    _id: String!
    title: String!, 
    price: Int!, 
    thumbnail: String, 
    description: String,
    code: String, 
    stock: Int

}

type Query {
getProductById(id: String!): Product
getAllProducts: [Product!]!
}


`;
