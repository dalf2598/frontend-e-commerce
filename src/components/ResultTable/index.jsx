import { useProduct } from "../../contexts/ProductContext";
import { Card } from "./Card";
import { Modal } from "../Modal";
import "./ResultTable.css";
import { useCart } from "../../contexts/CartContext";

function ResultTable() {
  const { showCart } = useCart();
  const { visibleProducts, isLoading, isOpen } = useProduct();
  const resultsClassName = `ResultsContainer ${showCart ? "two-columns" : ""}`;
  const cardsClassName = `CardsContainer ${showCart ? "two-columns" : ""}`;

  return (
    <div className={resultsClassName}>
      <h2>Results:</h2>
      <div className={cardsClassName}>
        {isLoading ? (
          <span className="loader"></span>
        ) : (
          visibleProducts.map((product, index) => (
            <Card
              key={index}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={Math.round(product.rating.rate)}
              description={product.description}
            />
          ))
        )}
      </div>
      {isOpen && <Modal />}
    </div>
  );
}

export { ResultTable };
