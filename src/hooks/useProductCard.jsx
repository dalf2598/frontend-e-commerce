import { useState } from "react";

export function useProductCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [ratingProduct, setRatingProduct] = useState(0);
  const [descriptionProduct, setDescriptionProduct] = useState("");

  return {
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
  };
}
