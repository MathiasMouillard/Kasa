import "./footer.css";
import Logo from "../../assets/images/Logo_footer.png";

function Footer() {
  return (
    <footer>
      <div className="logo">
        <img src={Logo} className="footer-logo" alt="Logo Kasa" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;