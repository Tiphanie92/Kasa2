import "../styles/information.css";

function Information(info) {
  return (
    <div className="info">
      <h1 className="title">{info.title}</h1>
      <p className="location">{info.location}</p>
    </div>
  );
}

export default Information;
