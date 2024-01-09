import { Link, useLocation } from "react-router-dom";
import ShortcutImage from "./ShortcutImage";
import parseSyntax from "../util/parseSyntax.js";
import convertSyntaxToText from "../util/convertSyntaxToText.js";
import "./ListItem.css";

function Steps({ steps }) {
  let location = useLocation();
  const parsedSteps = parseSyntax(steps);

  return (
    <>
      <ShortcutImage parsedSteps={parsedSteps} />
      {location.pathname === "/shortcuts" && (
        <div className="list-item__command">{convertSyntaxToText(steps)}</div>
      )}
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
