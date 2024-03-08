import { AiOutlineCloseCircle } from "react-icons/ai";
import { Counter } from "../../Counter";
import PropTypes from "prop-types";
import "./Item.css";

function Item({
  id,
  price,
  quantity,
  image,
  removeItem,
  incrementItem,
  decrementItem,
}) {
  return (
    <div className="ItemContainer">
      <div className="ProductImageContainer">
        <AiOutlineCloseCircle
          className="closeModal"
          onClick={() => removeItem(id)}
        />
        <img src={image} />
      </div>
      <h3>${price}</h3>
      <div className="QuantityContainer">
        <Counter
          value={quantity}
          handleDecrement={() => decrementItem(id)}
          handleIncrement={() => incrementItem(id)}
        />
      </div>
    </div>
  );
}

Item.propTypes = {
  id: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
  incrementItem: PropTypes.func.isRequired,
  decrementItem: PropTypes.func.isRequired,
};

export { Item };
