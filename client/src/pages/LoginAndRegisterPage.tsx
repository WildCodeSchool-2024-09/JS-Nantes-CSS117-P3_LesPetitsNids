//1. Les imports de base
import { useState } from "react";
import { Link } from "react-router-dom";
//2. Les composants et modules
// composants parents
import LoginPageComponent from "../components/LoginPageComponent";
import RegisterPageComponent from "../components/RegisterPageComponent";
//3. Les styles et assets
import "./LoginAndRegisterPage.css";

function LoginAndRegisterPage() {
  const [isParent, setIsParent] = useState<boolean>(true);
  const [registration, setRegistration] = useState<boolean>(false);

  return (
    <>
      <meta
        name="description"
        content="Page de connexion et de création de compte de l'application Les Petits Nids. Les Petits Nids est une application conçue pour permettre aux parents de réserver en urgence une place en crèche du lundi au vendredi de 9h à 17h pour leur enfant. Su cette page les parents et les crèches ont la possibilité de se créer un compte et d'y accéder via des chemins d'entrée respectifs"
      />
      <section className="login-register-background">
        <Link to="/search">
          <img src="/chevron.png" alt="fleche de retour" />
          <figcaption>
            <h1>Page d'accueil</h1>
            <p>Retour</p>
          </figcaption>
        </Link>
        <section>
          <section>
            <figure>
              <img
                src="/bluelogo.png"
                alt="Logo d'oiseau qui représente le site Les Petits Nids"
              />
            </figure>
            <form>
              <fieldset className="user-type-toggle">
                {registration ? (
                  <legend className="login-title">Créer un compte</legend>
                ) : (
                  <legend className="login-title">Se connecter</legend>
                )}
                <section>
                  <input
                    type="radio"
                    id="user-type-parent"
                    name="user-type"
                    value="parent"
                    checked={isParent} // Sélectionné par défaut
                    onChange={() => setIsParent(true)}
                  />
                  <label className="radio-button" htmlFor="user-type-parent">
                    En tant que parent
                  </label>

                  <input
                    type="radio"
                    id="user-type-nursery"
                    name="user-type"
                    value="nursery"
                    checked={!isParent} // Inversé par rapport à `isParent`
                    onChange={() => setIsParent(false)}
                  />
                  <label className="radio-button" htmlFor="user-type-nursery">
                    En tant que crèche
                  </label>
                </section>
              </fieldset>
            </form>

            {registration ? (
              <RegisterPageComponent
                isParent={isParent}
                setIsParent={setIsParent}
                setRegistration={setRegistration}
              />
            ) : (
              <LoginPageComponent />
            )}
            {registration ? (
              <button
                type="button"
                className="account-button"
                onClick={() => setRegistration(!registration)}
              >
                Vous avez déjà un compte ? Se connecter
              </button>
            ) : (
              <button
                type="button"
                className="account-button"
                onClick={() => setRegistration(!registration)}
              >
                Pas encore de compte ? Inscris-toi
              </button>
            )}
            {!registration && <p className="links">Mot de passe oublié</p>}
          </section>
          <img
            className="section-image-login"
            src="LoginAndRegister-Image.png"
            alt="Dessin d'enfants dans une crèche"
          />
        </section>
      </section>
    </>
  );
}

export default LoginAndRegisterPage;
