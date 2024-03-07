export const searchProducts = (currentProducts, currentSearchValue) => {
  const searchResult = currentProducts.filter((product) => {
    const productName = product.title.toLowerCase();
    return productName.includes(currentSearchValue.toLowerCase());
  });
  return searchResult;
};

export const sortProductsByNameOrPrice = (
  currentProducts,
  currentSortOrder
) => {
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
    (category) => category.checked && currentProduct.category === category.value
  );
};

export const filterByCategory = (currentProducts, currentCategories) => {
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

export const filterByRate = (currentProducts, currentRating) => {
  const productsFilteredByRate = currentProducts.filter(
    (product) => Math.round(product.rating.rate) >= currentRating
  );
  return productsFilteredByRate;
};
