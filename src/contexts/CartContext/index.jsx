import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

function useCart() {
  return useContext(CartContext);
}

function CartProvider({ children }) {
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

CartProvider.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export { useCart, CartProvider };
