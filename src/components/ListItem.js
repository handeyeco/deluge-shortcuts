import { Link } from "react-router-dom";
import ShortcutImage from "./ShortcutImage";
import "./ListItem.css";

function ListItem({
  name = "",
  description = "",
  steps = "",
  views = [],
  link,
}) {
  return (
    <div className="list-item">
      <div className="list-item__title">{name}</div>

      {description && (
        <div className="list-item__description">{description}</div>
      )}

      {steps && (
        <>
          <ShortcutImage steps={steps} />
          <div className="list-item__command">{JSON.stringify(steps, null, 2)}</div>
        </>
      )}

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
