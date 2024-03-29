import { useProduct } from "../../../contexts/ProductContext";
import "./Search.css";

function Search() {
  const { setSearchValue } = useProduct();

  return (
    <div className="SearchContainer">
      <input
        placeholder="Search..."
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img src="src/assets/loupe.png" />
    </div>
  );
}

export { Search };
