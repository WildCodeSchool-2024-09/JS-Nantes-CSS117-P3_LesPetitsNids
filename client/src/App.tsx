import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./style/globals.css";

function App() {
  return (
    <>
      <Outlet />
      <NavBar />
    </>
  );
}

export default App;
