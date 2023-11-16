import { Link } from "react-router-dom";

import v4_1_0 from "../data/shortcuts-v4_1_0";
import SYNTAX from "../data/syntax";
import generateCrossReference from "../util/crossRef";

import "./AboutPage.css";

const crossReference = JSON.stringify(
  generateCrossReference(SYNTAX, v4_1_0),
  null,
  2
);
const crDataString =
  "data:text/json;charset=utf-8," + encodeURIComponent(crossReference);

function AboutPage() {
  return (
    <div className="about-page">
      <h2>Filter Options</h2>
      <p>
        Filter by specific action{" "}
        <Link to="/shortcuts?q=action%3Apress">(example)</Link>
      </p>
      <div className="about-page__command">action:press</div>
      <p>
        Filter by specific control:{" "}
        <Link to="/shortcuts?q=control%3ASELECT">(example)</Link>
      </p>
      <div className="about-page__command">control:SELECT</div>
      <p>
        Filter by specific view:{" "}
        <Link to="/shortcuts?q=view%3Aarranger">(example)</Link>
      </p>
      <div className="about-page__command">view:arranger</div>
      <p>
        Word order doesn't matter unless you use quotes:{" "}
        <Link to={`/shortcuts?q="transpose+clip"`}>(example)</Link>
      </p>
      <div className="about-page__command">"transpose clip"</div>

      <h2>Credits</h2>
      <p>
        There's a high likelihood of mistakes:{" "}
        <a href="https://github.com/handeyeco/deluge-shortcuts">
          source and issues here
        </a>
        .
      </p>
      <p>Not affiliated with Synthstrom.</p>
      <p>
        Shortcuts from the v4.1.0 manual available on the{" "}
        <a href="https://synthstrom.com/">Synthstrom site</a> which was made in
        collaboration with <a href="https://www.synthdawg.com/">Synthdawg</a>.
      </p>
      <p>
        Inspired by <a href="https://marmotaudio.co.uk/">Neil Baldwin's</a>{" "}
        excellent{" "}
        <a href="https://forums.synthstrom.com/discussion/2403/v3-cheat-sheet-iconized">
          cheat sheet
        </a>
        .
      </p>

      <h2>Extra</h2>
      <a href={crDataString} download="cross-reference.json">
        Download cross-reference as JSON
      </a>
    </div>
  );
}

export default AboutPage;
