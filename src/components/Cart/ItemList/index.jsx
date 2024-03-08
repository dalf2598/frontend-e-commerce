import { Item } from "../Item";
import PropTypes from "prop-types";
import "./ItemList.css";

function ItemList({ list, setItemList }) {
  const handleDeleteItem = (id) => {
    setItemList((prev) => prev.filter((item) => item.id !== id));
  };

  const handleIncrementItem = (id) => {
    setItemList((prev) =>
      prev.map((item) => {
        return {
          ...item,
          quantity:
            item.id === id
              ? item.quantity < 100
                ? item.quantity + 1
                : item.quantity
              : item.quantity,
        };
      })
    );
  };

  const handleDecrementItem = (id) => {
    setItemList((prev) =>
      prev.map((item) => {
        return {
          ...item,
          quantity:
            item.id === id
              ? item.quantity > 1
                ? item.quantity - 1
                : item.quantity
              : item.quantity,
        };
      })
    );
  };

  return list.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      price={item.price}
      quantity={item.quantity}
      image={item.image}
      removeItem={handleDeleteItem}
      incrementItem={handleIncrementItem}
      decrementItem={handleDecrementItem}
    />
  ));
}

ItemList.propTypes = {
  list: PropTypes.array.isRequired,
  setItemList: PropTypes.func.isRequired,
};

export { ItemList };
