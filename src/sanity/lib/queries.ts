import { defineQuery } from "next-sanity";

export const allproducts = defineQuery (
    `
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
   
    }`)