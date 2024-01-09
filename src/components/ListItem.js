import { Link } from "react-router-dom";
import ShortcutImage from "./ShortcutImage";
import parseSyntax from "../util/parseSyntax.js";
import "./ListItem.css";

function Steps({ steps }) {
  const parsedSteps = parseSyntax(steps);

  return (
    <>
      <ShortcutImage parsedSteps={parsedSteps} />
      {/* <div className="list-item__command">{JSON.stringify(steps, null, 2)}</div> */}
    </>
  );
}

function ListItem({
  name = "",
  description = "",
  steps = "",
  views = [],
  link,
}) {
  // simplify the structure of the steps
  // for drawing
  return (
    <div className="list-item">
      <div className="list-item__title">{name}</div>

      {description && (
        <div className="list-item__description">{description}</div>
      )}

      {steps && <Steps steps={steps} />}

      {!!(views && views.length) && (
        <div className="list-item__views">Views: {views.join(", ")}</div>
      )}

      {link && (
        <div className="list-item__link">
          <Link to={link}>Filter shortcuts by: {name}</Link>
        </div>
      )}
    </div>
  );
}

export default ListItem;
