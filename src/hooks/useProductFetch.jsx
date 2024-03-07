import { useState, useEffect } from "react";

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
      console.log("hello world");
      try {
        const productList = await getData();
        const sortedProductList = productList.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        setProducts(sortedProductList);
        setVisibleProducts(sortedProductList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(JSON.stringify(error));
      }
    };
    fetchData();
  }, [setProducts, setVisibleProducts]);

  return {
    isLoading,
    error,
  };
}
