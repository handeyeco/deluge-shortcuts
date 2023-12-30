import ListItem from "./ListItem";
import "./List.css";

function Group({ group, subgroup }) {
  return (
    <>
      <div className="list__group">{group}</div>
      {subgroup.map((e) => (
        <ListItem
          key={e.name}
          name={e.name}
          description={e.description}
          steps={e.steps}
          views={e.views}
          link={e.link}
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
