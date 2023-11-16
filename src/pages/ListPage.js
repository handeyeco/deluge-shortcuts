import { useLocation } from "react-router-dom";

import v4_1_0 from "../data/shortcuts-v4_1_0";
import SYNTAX from "../data/syntax";
import filterList from "../util/filterList";
import List from "../components/List";
import NoResults from "../components/NoResults";
import useSearch from "../hooks/useSearch";

import "./ListPage.css";

function ListPage() {
  const location = useLocation();
  const { search, setSearch } = useSearch();

  const filteredList = filterList(
    search,
    location.pathname.includes("shortcuts") ? v4_1_0 : SYNTAX
  );

  return (
    <div>
      <div className="list-page__search">
        <label htmlFor="search">Filter</label>
        <input
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <p>
          No affiliation with Synthstrom. From v4.1.0 manual.{" "}
          <a href="https://github.com/handeyeco/deluge-shortcuts">
            Submit issue.
          </a>
        </p>
      </div>
      {filteredList ? <List data={filteredList} /> : <NoResults />}
    </div>
  );
}

export default ListPage;
