import { Link } from "react-router-dom";
import ShortcutImage from "./ShortcutImage";
import "./ListItem.css";

function ListItem({
  title = "",
  description = "",
  command = "",
  views = [],
  link,
}) {
  return (
    <div className="list-item">
      <div className="list-item__title">{title}</div>

      {description && (
        <div className="list-item__description">{description}</div>
      )}

      {command && (
        <>
          <ShortcutImage shortcut={command} />
          <div className="list-item__command">{command}</div>
        </>
      )}

      {!!(views && views.length) && (
        <div className="list-item__views">Views: {views.join(", ")}</div>
      )}

      {link && (
        <div className="list-item__link">
          <Link to={link}>Filter shortcuts by: {title}</Link>
        </div>
      )}
    </div>
  );
}

export default ListItem;
