import { createContext, useContext, useState, ReactNode } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  getCartCount: () => number;
}

const CartContext = createContext<CartContextType | null >(null);

export const CartProvider = ({ children }: { children: ReactNode}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if(existing){
        return prev.map((p) => p.id === item.id ? {...p, quantity: p.quantity + item.quantity} : p);
      }
      return [...prev, item];
    })
  }

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return(
    <CartContext.Provider value={{cart, addToCart, getCartCount}} >
      {children}
    </CartContext.Provider>
  )
};

export const useCart = () => {
  const context = useContext(CartContext);
  if(!context) throw new Error("useCart must be used within CartProvider");
  return context;
};