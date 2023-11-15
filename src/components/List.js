import ListItem from "./ListItem";
import "./List.css";

function Group({ group, subgroup }) {
  return (
    <>
      <div className="list__group">{group}</div>
      {subgroup.map((e) => (
        <ListItem
          key={e.title}
          title={e.title}
          description={e.description}
          command={e.command}
          views={e.views}
        />
      ))}
    </>
  );
}

function List({ data }) {
  return (
    <div>
      {Object.entries(data).map(([group, subgroup]) => (
        <Group key={group} group={group} subgroup={subgroup} />
      ))}
    </div>
  );
}

export default List;
