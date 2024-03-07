import { useProductContext } from "../../../contexts/ProductContext";
import { Rating } from "./Rating";
import "./RatingFilter.css";

function RatingFilter() {
  const { setMinimunRate } = useProductContext();
  return (
    <div className="RatingFilterContainer">
      <h2>Rates:</h2>
      <div className="RatingsContainer">
        <Rating
          stars={4}
          showSuffix={true}
          handleClick={() => setMinimunRate(4)}
        />
        <Rating
          stars={3}
          showSuffix={true}
          handleClick={() => setMinimunRate(3)}
        />
        <Rating
          stars={2}
          showSuffix={true}
          handleClick={() => setMinimunRate(2)}
        />
        <Rating
          stars={1}
          showSuffix={true}
          handleClick={() => setMinimunRate(1)}
        />
      </div>
    </div>
  );
}

export { RatingFilter };
