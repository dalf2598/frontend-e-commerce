export const searchProducts = (products, searchValue) => {
  const searchResult = products.filter((product) => {
    const productName = product.title.toLowerCase();
    return productName.includes(searchValue.toLowerCase());
  });
  return searchResult;
};

export const sortProductsByNameOrPrice = (products, sortOrder) => {
  if (sortOrder === "alphabetically") {
    return products.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortOrder === "ascending") {
    return products.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === "descending") {
    return products.sort((a, b) => b.price - a.price);
  }
  return products;
};

const belongToCheckedCategory = (product, categories) => {
  return categories.some(
    (category) => category.checked && product.category === category.value
  );
};

export const filterByCategory = (products, categories) => {
  const allUnchecked = categories.every(
    (category) => category.checked === false
  );
  if (allUnchecked) {
    return products;
  }

  const productsFilteredByCategory = products
    .map((product) => {
      if (belongToCheckedCategory(product, categories)) {
        return product;
      }
    })
    .filter((product) => product !== undefined);

  return productsFilteredByCategory;
};

export const filterByRate = (products, minimunRate) => {
  const productsFilteredByRate = products.filter(
    (product) => Math.round(product.rating.rate) >= minimunRate
  );
  return productsFilteredByRate;
};
