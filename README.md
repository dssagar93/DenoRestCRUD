
# Deno CRUD API
## Fetching and manipulating array of objects for in-memory CRUD ops 🦕


## List of features

1. Crud operation on in-memory array of objects
2. Oak framework

I have impelemented the aforementioned features with the help of youtube crash course by [ Traversy Media(Bob Traversy)](https://www.youtube.com/watch?v=NHHhiqwcfRM)

## Routes
`GET` api/v1/products/ -  Get All Products 

`GET` api/v1/products/:id - Get Single Product By Id

`POST` api/v1/products/ - Add New Product

`PUT` api/v1/products/:id - Update Product By Id

`DELETE` api/v1/products/:id  - Delete Product By Id


# Run a development server
Run `deno run --allow-net server.ts`. The '--allow-net' parameter is mandatory since Deno is a secure javascript runtime 
framework, we need to explicitly ask for the network permissions.
