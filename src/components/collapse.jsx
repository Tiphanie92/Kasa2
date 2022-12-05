import { useState } from "react";
import "../styles/collapse.css";
import Arrow from "../assets/arrow.png";

function Collapse(item, i) {
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
        <div onClick={() => toggle(i)} className="item">
          <div className="fond-title">
            <h2 className="titre">{item.titre}</h2>
            <span>
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
      </div>
    </div>
  );
}

export default Collapse;
