import { useState, useEffect } from "react";
import {
  searchProducts,
  sortProductsByNameOrPrice,
  filterByCategory,
  filterByRate,
} from "../utils/utils";
const PRODUCTS_CATEGORIES = [
  { value: "men's clothing", checked: false },
  { value: "women's clothing", checked: false },
  { value: "jewelery", checked: false },
  { value: "electronics", checked: false },
];

export function useProductFilter(products, setVisibleProducts) {
  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [categories, setCategories] = useState(PRODUCTS_CATEGORIES);
  const [minimunRate, setMinimunRate] = useState(1);

  useEffect(() => {
    const searchResult = searchProducts(products, searchValue);
    const sortResult = sortProductsByNameOrPrice(searchResult, sortOrder);
    const filterByCategoryResult = filterByCategory(sortResult, categories);
    const filterByRateResult = filterByRate(
      filterByCategoryResult,
      minimunRate
    );

    setVisibleProducts(filterByRateResult);
  }, [
    searchValue,
    sortOrder,
    categories,
    minimunRate,
    products,
    setVisibleProducts,
  ]);

  return {
    searchValue,
    setSearchValue,
    setSortOrder,
    setCategories,
    setMinimunRate,
  };
}
