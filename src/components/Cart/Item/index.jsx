import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Counter } from "../../Counter";
import "./Item.css";

function Item({ id, image, price, quantity }) {
  const handleRemoveItem = () => {
    console.log("Removing Item");
  };

  return (
    <div className="ItemContainer">
      <div className="ProductImageContainer">
        <AiOutlineCloseCircle className="closeModal" onClick={handleRemoveItem} />
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

export { Item };
