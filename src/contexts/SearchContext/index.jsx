import { useState, useEffect, createContext, useContext } from "react";
import { useProductCard } from "../../hooks/useProductCard";
import { useProductFetch } from "../../hooks/useProductFetch";

const SearchContext = createContext();

export function useSearchContext() {
  return useContext(SearchContext);
}

function SearchProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState([]);

  const { isLoading } = useProductFetch(setProducts, setVisibleProducts);
  const productCard = useProductCard();

  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [categories, setCategories] = useState([
    { value: "men's clothing", checked: false },
    { value: "women's clothing", checked: false },
    { value: "jewelery", checked: false },
    { value: "electronics", checked: false },
  ]);
  const [minimunRate, setMinimunRate] = useState(1);

  useEffect(() => {
    const searchProducts = (currentProducts, currentSearchValue) => {
      const searchResult = currentProducts.filter((product) => {
        const productName = product.title.toLowerCase();
        return productName.includes(currentSearchValue.toLowerCase());
      });
      return searchResult;
    };

    const sortProductsByNameOrPrice = (currentProducts, currentSortOrder) => {
      if (currentSortOrder === "alphabetically") {
        return currentProducts.sort((a, b) => a.title.localeCompare(b.title));
      }

      if (currentSortOrder === "ascending") {
        return currentProducts.sort((a, b) => a.price - b.price);
      }

      if (currentSortOrder === "descending") {
        return currentProducts.sort((a, b) => b.price - a.price);
      }
      return currentProducts;
    };

    const belongToCheckedCategory = (currentProduct, currentCategories) => {
      return currentCategories.some(
        (category) =>
          category.checked && currentProduct.category === category.value
      );
    };

    const filterByCategory = (currentProducts, currentCategories) => {
      const allUnchecked = currentCategories.every(
        (category) => category.checked === false
      );
      if (allUnchecked) {
        return currentProducts;
      }

      const productsFilteredByCategory = currentProducts
        .map((product) => {
          if (belongToCheckedCategory(product, currentCategories)) {
            return product;
          }
        })
        .filter((product) => product !== undefined);

      return productsFilteredByCategory;
    };

    const filterByRate = (currentProducts, currentRating) => {
      const productsFilteredByRate = currentProducts.filter(
        (product) => Math.round(product.rating.rate) >= currentRating
      );
      return productsFilteredByRate;
    };

    const searchResult = searchProducts(products, searchValue);
    const sortResult = sortProductsByNameOrPrice(searchResult, sortOrder);
    const filterByCategoryResult = filterByCategory(sortResult, categories);
    const filterByRateResult = filterByRate(
      filterByCategoryResult,
      minimunRate
    );

    setVisibleProducts(filterByRateResult);
  }, [searchValue, sortOrder, categories, minimunRate, products]);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        setSortOrder,
        setCategories,
        setMinimunRate,
        visibleProducts,
        isLoading,
        ...productCard,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
