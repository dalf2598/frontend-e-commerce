import { Detail } from "./Detail";
import { useProduct } from "../../../contexts/ProductContext";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ image, title, price, rating, description }) {
  const {
    setIsOpen,
    setImageProduct,
    setTitleProduct,
    setPriceProduct,
    setRatingProduct,
    setDescriptionProduct,
  } = useProduct();

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

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export { Card };
