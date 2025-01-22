import {create} from "zustand";

interface CartState {
  cart: any[];
  addItem: (product: any) => void;
  removeItem: (id: string) => void;
}

const useCartStore = create<CartState>((set) => ({
  cart: [],
  addItem: (product) => set((state) => {
    const existingProduct = state.cart.find(item => item._id === product._id);
    if (existingProduct) {
      return {
        cart: state.cart.map(item => 
          item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    } else {
      return {
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }
  }),
  removeItem: (id) => set((state) => ({
    cart: state.cart.filter(item => item._id !== id),
  })),
}));

export default useCartStore;
