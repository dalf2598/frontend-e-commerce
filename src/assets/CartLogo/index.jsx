import { useCart } from "../../contexts/CartContext";
import "./CartLogo.css";

function CartLogo() {
  const { setShowCart } = useCart();
  return (
    <div
      className="cartLogoContainer"
      onClick={() => {
        setShowCart((prev) => !prev);
      }}
    >
      <img src="src/assets/CartLogo/shopping-cart.png" />
    </div>
  );
}

export { CartLogo };
