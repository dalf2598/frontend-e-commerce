import { useState, useEffect, createContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [categories, setCategories] = useState([
    { value: "men's clothing", checked: false },
    { value: "women's clothing", checked: false },
    { value: "jewelery", checked: false },
    { value: "electronics", checked: false },
  ]);
  const [rate, setRate] = useState(1);

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
    }

    const belongToCheckedCategory = (currentProduct, currentCategories) => {
      return currentCategories.some(category => category.checked && currentProduct.category === category.value);
    }

    const filterByCategory = (currentProducts, currentCategories) => {
      const allUnchecked = currentCategories.every(category => category.checked === false);
      if(allUnchecked){
        return currentProducts;
      }

      const productsFilteredByCategory = currentProducts.map((product) => {
        if(belongToCheckedCategory(product, currentCategories)){
          return product;
        }
      }).filter(product => product !== undefined);;

      return productsFilteredByCategory;
    }

    const filterByRate = (currentProducts, currentRating) => {
      const productsFilteredByRate = currentProducts.filter(product => Math.round(product.rating.rate) >= currentRating);
      return productsFilteredByRate;
    }

    const searchResult = searchProducts(products, searchValue);
    const sortResult = sortProductsByNameOrPrice(searchResult, sortOrder);
    const filterByCategoryResult = filterByCategory(sortResult, categories);
    const filterByRateResult = filterByRate(filterByCategoryResult, rate);
    
    setDisplayedProducts(filterByRateResult);
  }, [searchValue, sortOrder, categories, rate]);

  return (
    <SearchContext.Provider
      value={{
        searchValue,
        setSearchValue,
        setSortOrder,
        setCategories,
        setRate,
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
