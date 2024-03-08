import { useState } from "react";

export function useProductCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [idProduct, setIdProduct] = useState(0);
  const [imageProduct, setImageProduct] = useState("");
  const [titleProduct, setTitleProduct] = useState("");
  const [priceProduct, setPriceProduct] = useState("");
  const [ratingProduct, setRatingProduct] = useState(0);
  const [descriptionProduct, setDescriptionProduct] = useState("");

  return {
    isOpen,
    setIsOpen,
    idProduct,
    setIdProduct,
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
