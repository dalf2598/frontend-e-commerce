import { useState, createContext, useContext } from "react";
import { useProductCard } from "../../hooks/useProductCard";
import { useProductFetch } from "../../hooks/useProductFetch";
import { useProductFilter } from "../../hooks/useProductFilter";

const ProductContext = createContext();

export function useProduct() {
  return useContext(ProductContext);
}

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const productFetch = useProductFetch(setProducts, setVisibleProducts);
  const productFilter = useProductFilter(products, setVisibleProducts);
  const productCard = useProductCard();

  return (
    <ProductContext.Provider
      value={{
        visibleProducts,
        ...productFetch,
        ...productFilter,
        ...productCard,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
