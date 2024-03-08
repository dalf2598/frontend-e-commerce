import { useState } from "react";
import { Rating } from "../Filter/RatingFilter/Rating";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useProduct } from "../../contexts/ProductContext";
import { Counter } from "../Counter";
import { useCart } from "../../contexts/CartContext";
import "./Modal.css";

function Modal() {
  const {
    setIsOpen,
    idProduct,
    imageProduct,
    titleProduct,
    priceProduct,
    ratingProduct,
    descriptionProduct,
  } = useProduct();

  const { setItemList } = useCart();

  const [quantity, setQuantity] = useState(1);

  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  const handleIncrement = () =>
    setQuantity((prev) => (prev < 100 ? prev + 1 : prev));

  const handleCloseModal = () => setIsOpen(false);

  const buildNewList = (itemList, newItem) => {
    const hasItem = itemList.some((item) => item.id === newItem.id);
    const updatedItemList = hasItem
      ? itemList.map((item) => {
          return {
            ...item,
            quantity:
              item.id === newItem.id
                ? item.quantity + newItem.quantity
                : newItem.quantity,
          };
        })
      : [...itemList, newItem];
    return updatedItemList;
  };

  const hanleAddProduct = () => {
    const newItem = {
      id: idProduct,
      price: priceProduct,
      quantity: quantity,
      image: imageProduct,
    };

    setItemList((prev) => buildNewList(prev, newItem));
    setQuantity(1);
    handleCloseModal();
  };

  return (
    <div className="ModalContainer">
      <div className="ContentModalContainer">
        <div className="ProductImageContainer">
          <AiOutlineCloseCircle
            className="closeModal"
            onClick={handleCloseModal}
          />
          <img src={imageProduct} />
        </div>
        <div className="DetailsModalContainer">
          <div className="HeaderDetailModalContainer">
            <h3>{titleProduct}</h3>
            <h3 className="Price">${priceProduct.toFixed(2)}</h3>
          </div>
          <Rating stars={ratingProduct} />
          <h6>{descriptionProduct}</h6>
          <div className="ActionsModalContainer">
            <Counter
              value={quantity}
              handleDecrement={handleDecrement}
              handleIncrement={handleIncrement}
              whiteColor
            />
            <button onClick={hanleAddProduct}>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Modal };
