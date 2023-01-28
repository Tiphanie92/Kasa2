import Carousel from "../components/carousel";
import Collapse from "../components/collapse";
import Rating from "../components/rating";
import Tag from "../components/tag";
import Host from "../components/host";
import Information from "../components/information";
import data from "../datas/data.json";
import Error from "../pages/error";
import "../styles/logement.css";
import { useParams } from "react-router-dom";

function Logement() {
  const { id } = useParams();
  const url = data.filter((item) => item.id === id);
  const error = data.find((item) => item.id === id);
  if (!error) return <Error />;
  return (
    <div className="fond">
      <div></div>
      {url.map((item) => (
        <div key={item.id}>
          <Carousel pictures={item.pictures} key={item.id} />
          <div>
            <div className="information"></div>
            <div className="host">
              <Information title={item.title} location={item.location} />
              <Host host={item.host} />
              <Tag tags={item.tags} />
              <Rating ratings={item.rating} />
            </div>
            <div className="collapse">
              <Collapse titre="Description" texte={item.description} />
              <Collapse
                titre="Équipements"
                texte={item.equipments.map((equipment, k) => {
                  return <li key={k}>{equipment}</li>;
                })}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Logement;
