import { Link } from "react-router-dom";
import "../styles/error.css";
function Error() {
  return (
    <div className="k-error">
      <h1 className="k-error__titre">404</h1>
      <p className="k-error__text">
        Oups ! La page que vous demandez n'existe pas.
      </p>
      <Link className="k-error__accueil" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  );
}

export default Error;
