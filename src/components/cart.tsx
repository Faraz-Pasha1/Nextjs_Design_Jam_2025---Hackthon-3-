import { useRouter } from "next/router";
// import useCartStore from "@/app/pages/cart/index"; // Zustand store
import useCartStore from "./store/cartStore";
import Link from "next/link"; // For routing
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { productSchema } from "@/sanity/schemaTypes/product";

export default function CartItems() {
  const { cart, removeItem } = useCartStore();
  const totalPrice = cart.reduce((total:any, item:any) => total + item.price * item.quantity, 0);

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">Your Cart</h1>
      <div className="grid gap-4 mt-4">
        {cart.map((item:any) => (
          <div key={item._id} className="flex justify-between items-center p-4 border rounded-lg">
            <div className="flex">
            <Image
              src={item.imageUrl}  
              alt={item.productName}
              className="w-60"
              width={300}
              height={500}
            />
              <div className="ml-4">
                <h2 className="font-semibold">{item.productName}</h2>
                <p>Rs./= {item.price}</p>
                <p>Qty: {item.quantity}</p>
              </div>
            </div>
            <Button
              onClick={() => removeItem(item._id)}
              className="bg-red-500 text-white py-1 px-3 rounded"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>

      <div className="mt-4 flex justify-between">
        <h2 className="text-xl font-bold">Total: Rs./= {totalPrice}</h2>
        <Link href="/checkout">
          <Button className="bg-green-500 text-white py-2 px-4 rounded">Checkout</Button>
        </Link>
      </div>
    </div>
  );
}
