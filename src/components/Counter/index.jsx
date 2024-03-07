import { AiOutlineMinusCircle } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import PropTypes from "prop-types";
import "./Counter.css";

function Counter({
  value,
  handleDecrement,
  handleIncrement,
  whiteColor = false,
}) {
  const counterClassName = `CounterContainer ${whiteColor ? "white" : ""}`;

  return (
    <div className={counterClassName}>
      <AiOutlineMinusCircle
        className="IconDecrement"
        onClick={handleDecrement}
      />
      <span>{value}</span>
      <IoIosAddCircleOutline
        className="IconIncrement"
        onClick={handleIncrement}
      />
    </div>
  );
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleIncrement: PropTypes.func.isRequired,
  whiteColor: PropTypes.bool,
};

export { Counter };
