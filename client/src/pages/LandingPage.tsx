import { NavLink } from "react-router-dom";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <figure className="logo">
        <img src="/logo.svg" alt="" />
        <figcaption className="small-not">Les Petits Nids</figcaption>
      </figure>
      <div className="white-painting">
        <figure className="mother2">
          <img src="/mother2.png" alt="" />

          <figcaption className="welcome">
            Garde d'enfant à la demande
          </figcaption>
        </figure>
        <p className="account-created">
          Réservez une place en moins de 60 secondes et obtenez une solution de
          garde, même pour le lendemain !
        </p>
      </div>
      <div className="button-pass">
        <NavLink to="search">
          <button type="button" className="round-button">
            &gt;
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default LandingPage;
