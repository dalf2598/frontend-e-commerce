import { Filter } from "../../components/Filter";
import { Navbar } from "../../components/Navbar";
import { ResultInfoBar } from "../../components/ResultInfoBar";
import { ResultTable } from "../../components/ResultTable";
import { Cart } from "../../components/Cart";
import { useCart } from "../../contexts/CartContext";
import "./LandingPage.css";

function LandingPage() {
  const { showCart, setShowCart } = useCart();

  const contentClassName = `content ${showCart ? "three-columns" : ""}`;

  return (
    <div>
      <Navbar setShowCart={setShowCart} />
      <div className={contentClassName}>
        <ResultInfoBar />
        <Filter />
        <ResultTable showCart={showCart} />
        {showCart && <Cart />}
      </div>
    </div>
  );
}

export { LandingPage };
