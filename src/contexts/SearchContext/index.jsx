import { useState, useEffect, createContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [ratingProduct, setRatingProduct] = useState(0);
  const [descriptionProduct, setDescriptionProduct] = useState("");

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productList = await getData();
        const sortedProductList = productList.sort((a, b) => a.title.localeCompare(b.title))
        setProducts(sortedProductList);
        setDisplayedProducts(sortedProductList);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const searchProducts = (searchValue) => {
    const searchResult = products.filter((product) => {
      const productName = product.title.toLowerCase();
      return productName.includes(searchValue.toLowerCase());
    });
    setDisplayedProducts(searchResult);
  };

  const sortProductsByNameOrPrice = (order) => {
    if (order === "alphabetically") {
      setDisplayedProducts([...products.sort((a, b) => a.title.localeCompare(b.title))]);
    } 

    if (order === "ascending") {
      setDisplayedProducts([...products.sort((a, b) => a.price - b.price)]);
    } 

    if (order === "descending") {
      setDisplayedProducts([...products.sort((a, b) => b.price - a.price)]);
    } 
  }

  return (
    <SearchContext.Provider
      value={{
        searchProducts,
        sortProductsByNameOrPrice,
        displayedProducts,
        isLoading,
        isOpen,
        setIsOpen,
        imageProduct,
        setImageProduct,
        titleProduct,
        setTitleProduct,
        priceProduct,
        setPriceProduct,
        descriptionProduct,
        setDescriptionProduct,
        ratingProduct,
        setRatingProduct,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
