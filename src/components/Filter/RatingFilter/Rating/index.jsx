import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import PropTypes from "prop-types";
import "./Rating.css";

function Rating({ stars, showSuffix = false, handleClick = () => {} }) {
  const fillStars = () => {
    const etiquetas = [];
    const starSelected = [...Array(stars)].map((_, index) => (
      <AiFillStar className="StarFilled" key={index} />
    ));
    const starNotSelected = [...Array(5 - stars)].map((_, index) => (
      <AiOutlineStar className="StarNotFilled" key={index} />
    ));
    etiquetas.push(starSelected);
    etiquetas.push(starNotSelected);
    return etiquetas;
  };

  return (
    <div className="RatingContainer" onClick={() => handleClick()}>
      {fillStars()}
      {showSuffix && <h3>& up</h3>}
    </div>
  );
}

Rating.propTypes = {
  stars: PropTypes.number.isRequired,
  showSuffix: PropTypes.bool,
  handleClick: PropTypes.func,
};

export { Rating };
