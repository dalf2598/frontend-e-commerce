import IconButton from "@mui/material/IconButton";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import "./Counter.css";

function Counter({ value, handleDecrement, handleIncrement }) { 
    return (
      <div className="CounterContainer">
        <IconButton onClick={handleDecrement} >
          <RemoveCircleOutlineIcon style={{ fontSize: '30px' }} />
        </IconButton>
        <span>{value}</span>
        <IconButton onClick={handleIncrement}>
          <AddCircleOutlineIcon style={{ fontSize: '30px' }} />
        </IconButton>
      </div>
  );
}

export { Counter };
