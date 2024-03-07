import { useSearchContext } from "../../../contexts/SearchContext";
import "./Search.css";

function Search() {
  const { setSearchValue } = useSearchContext();

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
