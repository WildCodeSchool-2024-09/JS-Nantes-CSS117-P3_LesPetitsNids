import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="nav-component">
        <NavLink to="favorite">
          <button type="button" className="nav-buttons">
            <img src="/favorite.svg" alt="link to the favorite page" />
          </button>
        </NavLink>
        <NavLink to="search">
          <button type="button" className="nav-buttons">
            <img src="/search.svg" alt="link to the search page" />
          </button>
        </NavLink>
        <NavLink to="loginandregister">
          <button type="button" className="nav-buttons">
            <img src="/user.svg" alt="link to the profil of the user" />
          </button>
        </NavLink>
        <NavLink to="book">
          <button type="button" className="nav-buttons">
            <img src="/books.svg" alt="link to the book page" />
          </button>
        </NavLink>
        <NavLink to="map">
          <button type="button" className="nav-buttons">
            <img src="/map.svg" alt="link to the map page" />
          </button>
        </NavLink>
      </nav>
    </>
  );
}

export default NavBar;
