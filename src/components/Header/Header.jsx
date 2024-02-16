import { NavLink } from "react-router-dom";
import "./header.css";
import Logo from "../../assets/images/LOGO.svg";

function Header() {
  return (
    <header>
      <div className="logo">
        <img src={Logo} className="header-logo" alt="Logo Kasa" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/a-propos" activeClassName="active">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
