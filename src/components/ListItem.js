import ShortcutImage from "./ShortcutImage";
import "./ListItem.css";

function ListItem({ title = "", description = "", command = "", views = [] }) {
  return (
    <div className="list-item">
      <div className="list-item__title">{title}</div>

      {description && (
        <div className="list-item__description">{description}</div>
      )}

      <ShortcutImage shortcut={command} />

      <div className="list-item__command">{command}</div>

      {!!(views && views.length) && (
        <div className="list-item__views">{views.join(" ")}</div>
      )}
    </div>
  );
}

export default ListItem;
