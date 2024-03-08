import { Total } from "./Total";
import { Item } from "./Item";
import "./Cart.css";

function Cart() {
  return (
    <div className="CartContainer">
      <Total value={2000} />
      <Item
        id={1}
        image={"https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"}
        price={2000}
        quantity={1}
      />
    </div>
  );
}

export { Cart };
