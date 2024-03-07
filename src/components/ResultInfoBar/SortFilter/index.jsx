import { useSearchContext } from "../../../contexts/SearchContext";
import "./SortFilter.css";

function SortFilter() {
  const { setSortOrder } = useSearchContext();

  return (
    <div className="SortFilterContainer">
      <select
        name="order"
        id="order"
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="alphabetically">Name</option>
        <option value="ascending">Price: Low to High</option>
        <option value="descending">Price: High to Low</option>
      </select>
    </div>
  );
}

export { SortFilter };
