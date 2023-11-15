import v4_1_0 from "./data/shortcuts-v4_1_0";
import SYNTAX from "./data/syntax";
import filterList from "./util/filterList";
import { useState } from "react";
import List from "./components/List";
import "./App.css";

const SHORTCUT_PAGE = "SHORTCUT_PAGE";
const SYNTAX_PAGE = "SYNTAX_PAGE";

function App() {
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState(SHORTCUT_PAGE);

  function changePage(nextPage) {
    setSearch("");
    setTab(nextPage);
  }

  const filteredList = filterList(
    search,
    tab === SHORTCUT_PAGE ? v4_1_0 : SYNTAX
  );

  return (
    <div className="container">
      <header>
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
      </header>
      <div className="content__container">
        <h1>Synthstrom Deluge Shortcuts</h1>
        <div className="page-tabs">
          <button
            className={tab === SHORTCUT_PAGE ? "active" : ""}
            onClick={() => changePage(SHORTCUT_PAGE)}
          >
            Shortcuts
          </button>
          <button
            className={tab === SYNTAX_PAGE ? "active" : ""}
            onClick={() => changePage(SYNTAX_PAGE)}
          >
            Legend
          </button>
        </div>
        <List data={filteredList} />
      </div>
    </div>
  );
}

export default App;
