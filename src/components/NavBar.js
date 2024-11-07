import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className="nav-link"
      >
        All Characters
      </NavLink>
      <NavLink
        to="/form"
        className="nav-link"
      >
        Create a New Character
      </NavLink>
    </nav>
  );
};

export default NavBar;