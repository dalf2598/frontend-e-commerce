import { useProduct } from "../../../contexts/ProductContext";
import PropTypes from "prop-types";
import "./TypeFilter.css";

function TypeFilter({ name, options }) {
  const { setCategories } = useProduct();

  const handleChange = (value) => {
    setCategories((prev) => {
      const updatedCategories = prev.map((item) => {
        if (item.value === value) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });
      return updatedCategories;
    });
  };

  return (
    <div className="TypeFilterContainer">
      <h2>{name}:</h2>
      {options.map((option, id) => (
        <div key={id} className="CheckBox">
          <input
            type="checkbox"
            id={option.id}
            name={option.label}
            onChange={() => handleChange(option.id)}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
    </div>
  );
}

TypeFilter.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export { TypeFilter };
