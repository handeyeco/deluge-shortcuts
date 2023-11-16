import { Link, useLocation, Navigate, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";

import "./App.css";

function onPath(loc, path) {
  return loc.pathname.includes(path);
}

function App() {
  const location = useLocation();

  return (
    <div className="container">
      <div className="content__container">
        <h1>Synthstrom Deluge Shortcuts</h1>
        <nav className="page-tabs">
          <ul>
            <li>
              <Link
                to={"shortcuts"}
                className={onPath(location, "shortcuts") ? "active" : ""}
              >
                Shortcuts
              </Link>
            </li>
            <li>
              <Link
                to={"legend"}
                className={onPath(location, "legend") ? "active" : ""}
              >
                Legend
              </Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/shortcuts" element={<ListPage />} />
          <Route path="/legend" element={<ListPage />} />
          <Route path="*" element={<Navigate to="shortcuts" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
