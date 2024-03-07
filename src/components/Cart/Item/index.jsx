import { AiOutlineCloseCircle } from "react-icons/ai";
import { Counter } from "../../Counter";
import PropTypes from "prop-types";
import "./Item.css";

function Item({ id, image, price, quantity }) {
  const handleRemoveItem = () => {
    console.log(`Removing Item ${id}`);
  };

  return (
    <div className="ItemContainer">
      <div className="ProductImageContainer">
        <AiOutlineCloseCircle
          className="closeModal"
          onClick={handleRemoveItem}
        />
        <img src={image} />
      </div>
      <h3>${price}</h3>
      <div className="QuantityContainer">
        <Counter
          value={quantity}
          handleDecrement={() => {}}
          handleIncrement={() => {}}
        />
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};

export { Item };
