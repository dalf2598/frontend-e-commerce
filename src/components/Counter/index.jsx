import { AiOutlineMinusCircle } from "react-icons/ai";
import { IoIosAddCircleOutline } from "react-icons/io";
import "./Counter.css";

function Counter({ value, handleDecrement, handleIncrement, whiteColor = false }) { 
    return (
      <div className= {`CounterContainer ${ whiteColor ? "white" : "" }`}>
        <AiOutlineMinusCircle className="IconDecrement" onClick={handleDecrement}/>
        <span>{value}</span>
        <IoIosAddCircleOutline className="IconIncrement" onClick={handleIncrement}/>
      </div>
  );
}

export { Counter };
