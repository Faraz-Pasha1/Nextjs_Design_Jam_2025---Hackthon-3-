import { defineQuery } from "next-sanity";

// Query to fetch all products
export const allproducts = defineQuery(`
  *[_type == "product"] {
    _id,
    productName,
    price,
    category,
    inventory,
    colors,
    status,
    description,
    "imageUrl" : image.asset->url
  }
`);

// Query to fetch product by ID
export const productById = (id: string) => defineQuery(`
  *[_type == "product" && _id == "${id}"] {
    _id,
    productName,
    price,
    category,
    inventory,
    colors,
    status,
    description,
    "imageUrl" : image.asset->url
  }[0]
`);
