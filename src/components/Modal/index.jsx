import { Rating } from "../Filter/RatingFilter/Rating";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSearchContext } from "../../contexts/SearchContext";
import { Counter } from "../Counter";
import "./Modal.css";

function Modal() {
  const {
    setIsOpen,
    imageProduct,
    titleProduct,
    priceProduct,
    ratingProduct,
    descriptionProduct,
  } = useSearchContext();

  const setCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="ModalContainer">
      <div className="ContentModalContainer">
        <div className="ProductImageContainer">
          <AiOutlineCloseCircle
            className="closeModal"
            onClick={setCloseModal}
          />
          <img src={imageProduct} />
        </div>
        <div className="DetailsModalContainer">
          <div className="HeaderDetailModalContainer">
            <h3>{titleProduct}</h3>
            <h3 className="Price">${priceProduct}</h3>
          </div>
          <Rating stars={ratingProduct} />
          <h6>{descriptionProduct}</h6>
          <div className="ActionsModalContainer">
            <Counter
              value={1}
              handleDecrement={() => {}}
              handleIncrement={() => {}}
              whiteColor
            />
            <button>Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Modal };
