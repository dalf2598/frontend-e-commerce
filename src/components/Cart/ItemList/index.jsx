import { Item } from "../Item";
import PropTypes from "prop-types";
import "./ItemList.css";

function ItemList({ list }) {
  return list.map((item) => (
    <Item
      key={item.id}
      id={item.id}
      price={item.price}
      quantity={item.quantity}
      image={item.image}
    />
  ));
}

ItemList.propTypes = {
  list: PropTypes.array.isRequired,
};

export { ItemList };
