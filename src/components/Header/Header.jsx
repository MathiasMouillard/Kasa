import { NavLink } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/images/LOGO.svg";

/**
 * Composant représentant l'en-tête de l'application.
 */

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} className="header-logo" alt="Logo Kasa" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact="true" to="/" activeclassname="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/About" activeclassname="active">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
