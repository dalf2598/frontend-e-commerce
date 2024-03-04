import { Rating } from "../../../Filter/RatingFilter/Rating"
import './Detail.css'

function Detail ({title, price, rating }) {
    return (
        <div className="DetailsCardContainer">
            <h3>{title}</h3>
            <Rating stars={rating}/>
            <h3>${price}</h3>
            <button> Add to Cart</button>
        </div>
    )
}

export { Detail }
