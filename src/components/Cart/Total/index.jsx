import PropTypes from "prop-types";
import "./Total.css";

function Total({ value }) {
  return (
    <div className="TotalContainer">
      <h2>Subtotal</h2>
      <h3>${value}</h3>
      <button>Continue</button>
    </div>
  );
}

Total.propTypes = {
  value: PropTypes.number.isRequired,
};

export { Total };
