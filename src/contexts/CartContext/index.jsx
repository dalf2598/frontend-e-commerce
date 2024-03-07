import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState({});

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        total,
        setTotal,
        items,
        setItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
