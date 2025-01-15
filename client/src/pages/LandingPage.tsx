import "./LandingPage.css";
function LandingPage() {
  return (
    <div className="landing-page">
      <figure className="logo">
        <img src="/logo.svg" alt="" />
        <figcaption className="small-not">Les petits nids</figcaption>
      </figure>
      <div className="white-painting">
        <figure className="mother">
          <img src="/mother.svg" alt="" />

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
        <p>Passer</p>
        <button type="button" className="round-button">
          &gt;
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
