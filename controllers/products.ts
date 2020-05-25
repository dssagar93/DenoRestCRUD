import { Product } from "./types.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let products: Product[] = [
  {
    id: "1",
    name: "First Product",
    description: "This is the first product",
    price: 19.05,
  },
  {
    id: "2",
    name: "Second Product",
    description: "This is the second product",
    price: 14,
  },
  {
    id: "3",
    name: "Third Product",
    description: "This is the third product",
    price: 25.5,
  },
  {
    id: "4",
    name: "Fourth Product",
    description: "This is the fourth product",
    price: 30,
  },
];

//@Desc Get all products
//@Route GET api/v1/products

const getProducts = ({ response }: { response: any }) => {
  response.body = {
    success: true,
    data: products,
  };
};

//@Desc Get single product
//@Route GET api/v1/products/:id

const getProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);
  if (product) {
    response.status = 200;
    response.body = {
      success: true,
      data: product,
    };
  } else {
    response.status = 400;
    response.body = {
      success: false,
      msg: "Product not found",
    };
  }
};

//@Desc Add a product
//@Route POST api/v1/products/

const addProduct = async (
  { request, response }: { request: any; response: any },
) => {
  const body = await request.body();
  if (!request.hasBody) {
    response.status = 400,
      response.body = {
        success: false,
        msg: "No Data",
      };
  } else {
    const product: Product = body.value;
    product.id = v4.generate();
    products.push(product);
    response.status = 201,
      response.body = {
        success: true,
        data: product,
      };
  }
};

//@Desc Update a product
//@Route PUT api/v1/products/:id

const updateProduct = async (
  { params, request, response }: {
    params: { id: string };
    request: any;
    response: any;
  },
) => {
  const product: Product | undefined = products.find((p) => p.id === params.id);

  if (product) {
    const body = await request.body();
    console.log("body", body);
    const updateData: { name?: string; description?: string; price?: number } =
      body.value;

    products = products.map((p) =>
      p.id === params.id ? { ...p, ...updateData } : p
    );

    response.status = 200,
      response.body = {
        success: true,
        data: products,
      };
  } else {
    response.status = 400;
    response.body = {
      success: false,
      msg: "No date found for update",
    };
  }
};

//#Desc Delete a product
//@Route DELTE api/v1/products/:id

const deleteProduct = (
  { params, response }: { params: { id: string }; response: any },
) => {
  products = products.filter((p) => p.id !== params.id);
  response.body = {
    success: true,
    data: products,
  };
};

export { getProducts, getProduct, addProduct, updateProduct, deleteProduct };