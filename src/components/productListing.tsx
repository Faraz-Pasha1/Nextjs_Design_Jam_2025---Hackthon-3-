"use client"; // Add this directive to mark the file as a client component

import { sanityfetch } from "@/sanity/lib/fetch";
import { allproducts } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link"; // For routing
import { Button } from "@/components/ui/button"; // Assume you have a button component
import useCartStore from "@/components/store/cartStore"; // Zustand cart store
import { useEffect, useState } from "react"; // For async handling

type Product = {
  id: string;
  productName: string;
  price: string;
  category: string;
  imageUrl: string;
};

export default function ProductDetails() {
  const { addItem } = useCartStore(); // Call Zustand hook here synchronously
  const [products, setProducts] = useState<Product[]>([]); // Local state to store products

  // Fetch products when the component is mounted
  useEffect(() => {
    const fetchProducts = async () => {
      const products: Product[] = await sanityfetch({ query: allproducts });
      setProducts(products); // Update state with fetched products
    };

    fetchProducts();
  }, []); // Empty dependency array means this runs once when the component mounts

  return (
    <div className="mt-10">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <div
            className="border p-4 rounded-lg shadow-sm flex flex-col sm:flex-cols-2"
            key={product.id}
          >
            <Image
              src={product.imageUrl}
              alt={product.productName}
              className="w-60"
              width={300}
              height={500}
            />
            <h2 className="text-medium font-bold items-left">{product.productName}</h2>
            <p className="items-left text-sm">
              <span className="font-bold">{product.category}</span>
            </p>
            <p className="items-left">
              <span className="font-bold">Rs./= </span>
              {product.price}
            </p>

            {/* Add to Cart Button */}
            <Button
              onClick={() => {
                addItem(product); // Add the product to the cart
              }}
              className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            >
              <Link href={`/product/${product.id}`} passHref>
                View Details
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
