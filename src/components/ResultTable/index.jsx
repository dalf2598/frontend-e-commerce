import { useSearchContext } from "../../contexts/SearchContext";
import { Card } from "./Card";
import { Modal } from "../Modal";
import "./ResultTable.css";

function ResultTable({ showCart }) {
  const { displayedProducts, isLoading, isOpen } = useSearchContext();
  return (
    <div className={`ResultContainer ${showCart ? "two-columns" : ""}`}>
      <h2>Results:</h2>
      <div className={`CardResultsContainer ${showCart ? "two-columns" : ""}`}>
        {isLoading ? (
          <span className="loader"></span>
        ) : (
          displayedProducts.map((product, index) => (
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
