import { Detail } from "./Detail";
import { useSearchContext } from "../../../contexts/SearchContext";
import "./Card.css";

function Card({ image, title, price, rating, description }) {
  const {
    setIsOpen,
    setImageProduct,
    setTitleProduct,
    setPriceProduct,
    setRatingProduct,
    setDescriptionProduct,
  } = useSearchContext();

  const openModal = () => {
    setIsOpen(true);
    setImageProduct(image);
    setTitleProduct(title);
    setPriceProduct(price);
    setRatingProduct(rating);
    setDescriptionProduct(description);
  };

  return (
    <div className="CardContainer" onClick={openModal}>
      <div className="ProductImageContainer">
        <img src={image} />
      </div>
      <Detail title={title} price={price} rating={rating} />
    </div>
  );
}

export { Card };
