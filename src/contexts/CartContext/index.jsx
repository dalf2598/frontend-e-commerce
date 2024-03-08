import { useState, createContext, useContext, useEffect } from "react";
import PropTypes from "prop-types";

const CartContext = createContext();

function useCart() {
  return useContext(CartContext);
}

function CartProvider({ children }) {
  const [showCart, setShowCart] = useState(false);
  const [total, setTotal] = useState(0);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const newTotal = itemList.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [itemList]);

  return (
    <CartContext.Provider
      value={{
        showCart,
        setShowCart,
        total,
        setTotal,
        itemList,
        setItemList,
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
