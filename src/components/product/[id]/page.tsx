
import { useRouter } from "next/router";
import { sanityfetch } from "@/sanity/lib/fetch"; // Assume this is your custom fetch function
import { productById } from "@/sanity/lib/queries"; // Query to fetch product by ID
import Image from "next/image";
import { Button } from "@/components/ui/button"; // Assume this is your button component
import useCartStore from "@/components/store/cartStore"; // Zustand cart store
import toast from "react-hot-toast"; // For notifications

export default async function ProductDescription() {
  const router = useRouter();
  const { id } = router.query; // Get the product ID from the URL

  // Return loading state while waiting for the `id` parameter
  if (!id) {
    return <div>Loading...</div>;
  }

  // Fetch product details from Sanity
  const product = await sanityfetch({
    query: productById(id as string), // Pass the product ID to the query
  });

  const { addItem } = useCartStore();

  return (
    <div className="mt-10 grid md:grid-cols-2 gap-4">
      <div className="flex justify-center">
        <Image
          src={product.imageUrl}
          alt={product.productName}
          width={400}
          height={500}
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">{product.productName}</h2>
        <p className="text-lg font-semibold">Rs./= {product.price}</p>
        <p className="mt-2">{product.description}</p>

        {/* Add to Cart Button */}
        <Button
          onClick={() => {
            addItem(product); // Add the product to the cart
            toast.success(`${product.productName} added to cart!`);
          }}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
