import { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import "./Search.css";

function Search() {
  const { setSearchValue } = useContext(SearchContext);

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
