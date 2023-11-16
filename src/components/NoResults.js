import { useLocation, Link } from "react-router-dom";
import "./NoResults.css";

function NoResults() {
  const location = useLocation();
  return (
    <div className="no-results">
      <Link to={location.pathname}>
        No results match your search. Click to clear.
      </Link>
    </div>
  );
}

export default NoResults;
