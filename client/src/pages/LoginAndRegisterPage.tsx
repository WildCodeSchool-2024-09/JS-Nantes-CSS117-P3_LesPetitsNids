import { useState } from "react";
import "./LoginAndRegisterPage.css";

import { Link } from "react-router-dom";
import LoginPageComponent from "../components/LoginPageComponent";
import RegisterPageComponent from "../components/RegisterPageComponent";

function LoginAndRegisterPage() {
  const [isParent, setIsParent] = useState<boolean>(true);
  const [registration, setRegistration] = useState<boolean>(false);

  function handleUser() {
    setIsParent(!isParent);
  }

  return (
    <>
      <section className="login-page-container">
        <figure className="logo">
          <img src="/logo.svg" alt="logo" />
        </figure>
        {registration ? (
          <h1 className="login-title">Créer un compte</h1>
        ) : (
          <h1 className="login-title">Se connecter</h1>
        )}
        <section className="tab-container">
          <button
            type="button"
            className={`tab-button ${isParent === true ? "active-tab" : ""}`}
            onClick={handleUser}
          >
            En tant que Parent
          </button>
          <button
            type="button"
            className={`tab-button ${isParent === false ? "active-tab" : ""}`}
            onClick={handleUser}
          >
            En tant que Crèche
          </button>
        </section>
        {registration ? (
          <RegisterPageComponent
            isParent={isParent}
            setIsParent={setIsParent}
          />
        ) : (
          <LoginPageComponent />
        )}
        <Link to="" className="links">
          {registration ? (
            <button
              type="button"
              className="account-button"
              onClick={() => setRegistration(!registration)}
            >
              Retour vers la connexion
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
        </Link>
        {!registration && (
          <Link to="" className="links">
            Mot de passe oublié
          </Link>
        )}
      </section>
      <section className="button-return">
        <button className="back-button" type="button">
          <span className="arrow" />
        </button>
      </section>
    </>
  );
}

export default LoginAndRegisterPage;
