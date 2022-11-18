import { Link } from "react-router-dom";
import data from "../datas/data.json";
import "../styles/card.css";
function Card() {
  return (
    <div className="k-background">
      {data.map((postData) => {
        return (
          <Link
            to={"/Logement/" + postData.id}
            className="k-card"
            key={postData.id}
          >
            <img src={postData.cover} className="k-cover" alt="" />
            <h2 className="k-title">{postData.title}</h2>
          </Link>
        );
      })}
    </div>
  );
}

export default Card;
