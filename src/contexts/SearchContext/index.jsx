import { useState, createContext, useContext } from "react";
import { useProductCard } from "../../hooks/useProductCard";
import { useProductFetch } from "../../hooks/useProductFetch";
import { useProductFilter } from "../../hooks/useProductFilter";

const SearchContext = createContext();

export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);
  const productFetch = useProductFetch(setProducts, setVisibleProducts);
  const productFilter = useProductFilter(products, setVisibleProducts);
  const productCard = useProductCard();

  return (
    <SearchContext.Provider
      value={{
        visibleProducts,
        ...productFetch,
        ...productFilter,
        ...productCard,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
