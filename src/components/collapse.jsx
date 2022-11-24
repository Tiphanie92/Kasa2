import { useState } from "react";
import "../styles/collapse.css";
import Arrow from "../assets/arrow.png";

function Collapse() {
  const [selected, setSelected] = useState(false);
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(false);
    }

    setSelected(i);
  };
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title">
              <h2 className="titre">{item.titre}</h2>
              <span onClick={() => toggle(i)}>
                {selected === i ? (
                  <img src={Arrow} alt="fléche" className="active"></img>
                ) : (
                  <img src={Arrow} alt="fléche" className="desactive"></img>
                )}
              </span>
            </div>
            <div className={selected === i ? `content show ` : `content `}>
              <p className="texte">{item.texte}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    titre: "Fiabilité",
    texte:
      "Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont réguliérement vérifiées par nos équipes.",
  },
  {
    titre: "Respect",
    texte:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    titre: "Service",
    texte:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    titre: "Sécurité",
    texte:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default Collapse;
