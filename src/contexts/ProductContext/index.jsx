import { useState, createContext, useContext } from "react";
import { useProductCard } from "../../hooks/useProductCard";
import { useProductFetch } from "../../hooks/useProductFetch";
import { useProductFilter } from "../../hooks/useProductFilter";
import PropTypes from "prop-types";

const ProductContext = createContext();

function useProduct() {
  return useContext(ProductContext);
}

function ProductProvider({ children }) {
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

ProductProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element), // Array of elements
    PropTypes.element, // Single element
  ]).isRequired,
};

export { useProduct, ProductProvider };
