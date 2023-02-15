export default `

type Product {

    _id: String!,
    title: String, 
    price: Int, 
    thumbnail: String, 
    description: String,
    code: String, 
    stock: Int

}

input productInput {

    title: String, 
    price: Int, 
    thumbnail: String, 
    description: String,
    code: String, 
    stock: Int
    
}

type Query {

    getProductById(id: String!): Product
    getAllProducts: [Product!]!,
    

}

type Mutation {

    saveProduct(data: productInput!): Product,
    updateProduct(id: String!, data: productInput!): Product,
    deleteProduct(id: String!): Product

}

`;
