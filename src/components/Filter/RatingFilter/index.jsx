import { useSearchContext } from "../../../contexts/SearchContext";
import { Rating } from "./Rating";
import "./RatingFilter.css";

function RatingFilter() {
  const { setRate } = useSearchContext();
  return (
    <div className="RatingFilterContainer">
      <h2>Rates:</h2>
      <div className="RatingsContainer">
        <Rating stars={4} showSuffix={true} handleClick={() => setRate(4)} />
        <Rating stars={3} showSuffix={true} handleClick={() => setRate(3)} />
        <Rating stars={2} showSuffix={true} handleClick={() => setRate(2)} />
        <Rating stars={1} showSuffix={true} handleClick={() => setRate(1)} />
      </div>
    </div>
  );
}

export { RatingFilter };
