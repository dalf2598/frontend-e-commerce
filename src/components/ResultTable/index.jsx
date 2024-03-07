import { useProduct } from "../../contexts/ProductContext";
import { Card } from "./Card";
import { Modal } from "../Modal";
import "./ResultTable.css";

function ResultTable({ showCart }) {
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
