import Carousel from "../components/carousel";
import Collapse from "../components/collapse";
import data from "../datas/data.json";
import { useParams } from "react-router-dom";
function Logement() {
  const { id } = useParams();
  return (
    <div>
      {data
        .filter((item) => item.id === id)
        .map((item, i) => (
          <div>
            <Carousel pictures={item.pictures} key={i} />
            <Collapse titre="Description" texte={item.description} />
            <Collapse titre="Équipements" texte={item.equipments} />
          </div>
        ))}
    </div>
  );
}

export default Logement;
