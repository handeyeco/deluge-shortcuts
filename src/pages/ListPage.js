import { useRef } from "react";
import { useLocation } from "react-router-dom";

import v4_1_0 from "../data/shortcuts-v4_1_0";
import SYNTAX from "../data/syntax";
import filterList from "../util/filterList";
import List from "../components/List";
import NoResults from "../components/NoResults";
import useSearch from "../hooks/useSearch";

import "./ListPage.css";

function ListPage() {
  const inputRef = useRef();
  const location = useLocation();
  const { search, setSearch } = useSearch();

  const isShortcutPage = location.pathname.includes("shortcuts");

  const filteredList = filterList(search, isShortcutPage ? v4_1_0 : SYNTAX);

  function handleSubmit(e) {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.blur();
    }
  }

  return (
    <div>
      <div className="list-page__search">
        <form onSubmit={handleSubmit}>
          <label htmlFor="search">Filter</label>
          <input
            ref={inputRef}
            name="search"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
        {isShortcutPage && (
          <p className="list-page__search-example">
            action:press control:SELECT view:arranger "exact search"
          </p>
        )}
      </div>
      <div>{filteredList ? <List data={filteredList} /> : <NoResults />}</div>
    </div>
  );
}

export default ListPage;
