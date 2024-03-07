import { useState, useEffect } from "react";
import { sortProductsByNameOrPrice } from "../utils/utils";

const PRODUCTS_URL = "https://fakestoreapi.com/products";

export function useProductFetch(setProducts, setVisibleProducts) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getData = async () => {
    const response = await fetch(PRODUCTS_URL);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        const sortedProductList = sortProductsByNameOrPrice(
          productList,
          "alphabetically"
        );
        setProducts(sortedProductList);
        setVisibleProducts(sortedProductList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(String(error));
      }
    };
    fetchData();
  }, [setProducts, setVisibleProducts]);

  return {
    isLoading,
    error,
  };
}
