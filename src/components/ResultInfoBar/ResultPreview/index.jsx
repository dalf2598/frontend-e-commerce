import { useSearchContext } from "../../../contexts/SearchContext";
import "./ResultPreview.css";

function ResultPreview() {
  const { searchValue } = useSearchContext();
  return (
    <div className="ResultPreviewContainer">
      <h3>1-16 of over 4000 results for </h3>
      <h3 className="SearchWord">
        {searchValue.length > 0 && `"${searchValue}"`}
      </h3>
    </div>
  );
}

export { ResultPreview };
