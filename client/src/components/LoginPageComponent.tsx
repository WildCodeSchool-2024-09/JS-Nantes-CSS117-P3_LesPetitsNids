import type { FormEvent } from "react";
import "./LoginPageComponent.css";

function LoginPageComponent() {
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const formatedData = Object.fromEntries(form.entries());
    console.warn(formatedData);
  }

  return (
    <>
      <form onSubmit={onSubmit} className="login-form">
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input-field"
        />
        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          className="input-field"
        />
        <button
          className="button-secondary form-validation-button"
          type="submit"
        >
          Connexion
        </button>
      </form>
    </>
  );
}

export default LoginPageComponent;
