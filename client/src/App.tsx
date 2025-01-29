import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import "./style/globals.css";
import type { Auth } from "./types/Login";

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const [auth, setAuth] = useState<Auth | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/user/me`,
          {
            method: "GET",
            credentials: "include",
          },
        );

        if (response.status === 200) {
          const user = await response.json();
          setAuth(user);
        } else {
          setAuth(null);
        }
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de l'utilisateur :",
          error,
        );
      }
    };

    checkUser();
  }, []);
  return (
    <>
      {auth ? (
        <p>Bienvenue, {auth.user.first_name} !</p>
      ) : (
        <p>Vous n'êtes pas connecté.</p>
      )}
      <Outlet context={{ setAuth }} />
      {isLandingPage ? "" : <NavBar />}
      <ToastContainer />
    </>
  );
}

export default App;
