import "./App.css";
import { useState } from "react";
import { Filter } from "./components/Filter";
import { Navbar } from "./components/Navbar";
import { ResultInfoBar } from "./components/ResultInfoBar";
import { ResultTable } from "./components/ResultTable";
import { Cart } from "./components/Cart";
import { ProductProvider } from "./contexts/ProductContext";

function App() {
  const [showCart, setShowCart] = useState(false);

  return (
    <ProductProvider>
      <Navbar setShowCart={setShowCart} />
      <div
        className={`content-ResultandFilter ${showCart ? "three-columns" : ""}`}
      >
        <ResultInfoBar />
        <Filter />
        <ResultTable showCart={showCart} />
        {showCart && <Cart />}
      </div>
    </ProductProvider>
  );
}

export default App;
