import { Total } from "./Total";
import { ItemList } from "./ItemList";
import { useCart } from "../../contexts/CartContext";
import "./Cart.css";

function Cart() {
  const { itemList, setItemList, total } = useCart();

  return (
    <div className="CartContainer">
      <Total value={total} />
      <ItemList list={itemList} setItemList={setItemList} />
    </div>
  );
}

export { Cart };
