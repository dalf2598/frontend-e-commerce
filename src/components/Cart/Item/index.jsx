import React from "react";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Counter } from '../../Counter';
import "./Item.css";

function Item({ id, image, price, quantity }) {
  const handleRemoveItem = () => {
    console.log("Removing Item");
  };

  return (
    <div className="ItemContainer">
      <div className="ItemIconContainer">
        <IconButton onClick={handleRemoveItem}>
          <HighlightOffIcon className="close-icon" />
        </IconButton>
      </div>
      <div className="ItemImageContainer">
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
