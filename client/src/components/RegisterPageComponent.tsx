import type { FormEvent } from "react";
import "./LoginPageComponent.css";

interface ParentProps {
  isParent: boolean;
  setIsParent: (isParent: boolean) => void;
}
function RegisterPageComponent({ isParent }: ParentProps) {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());
    console.warn(formatedData);
  }
  return (
    <>
      <form onSubmit={onSubmit} className="login-form">
        {isParent ? (
          <div className="user-registration">
            <input
              type="text"
              name="lastName"
              placeholder="Nom"
              aria-label="Nom"
              className="input-field"
            />
            <input
              type="text"
              name="firstName"
              placeholder="Prénom"
              aria-label="Prénom"
              className="input-field"
            />
          </div>
        ) : (
          <div className="user-registration">
            <input
              type="text"
              name="nurseryName"
              placeholder="Nom de l'établissement"
              aria-label="Nom de l'établissement"
              className="input-field"
            />
          </div>
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          aria-label="Email"
          className="input-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          aria-label="Mot de passe"
          className="input-field"
        />
        <button
          className="button-secondary form-validation-button"
          type="submit"
        >
          Créer le compte
        </button>
      </form>
    </>
  );
}

export default RegisterPageComponent;
