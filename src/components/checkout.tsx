import useCartStore from "./store/cartStore";
import { Button } from "@/components/ui/button";

export default function Checkout() {
  const { cart } = useCartStore();
  const totalPrice = cart.reduce((total:any, item:any) => total + item.price * item.quantity, 0);

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Total Price: Rs./= {totalPrice}</h2>
        {/* You can add a form here for the checkout process */}
        <Button className="bg-green-500 text-white py-2 px-4 rounded mt-4">Proceed to Payment</Button>
      </div>
    </div>
  );
}
