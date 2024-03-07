import "./App.css";
import { ProductProvider } from "./contexts/ProductContext";
import { CartProvider } from "./contexts/CartContext";
import { LandingPage } from "./pages/LandingPage";

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <LandingPage />
      </ProductProvider>
    </CartProvider>
  );
}

export default App;
