import "../styles/tag.css";

function Tag(names) {
  return (
    <ul className="background">
      {names.tags.map((tag, index) => {
        return (
          <li className="tag" key={index}>
            {tag}
          </li>
        );
      })}
    </ul>
  );
}

export default Tag;
