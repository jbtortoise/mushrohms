import "./MobileNav.css";
import { Link } from "react-router-dom";

function MobileNav(props) {
  return (
    <div className="mobile-nav-container">
      <div className="hamburger-menu" onClick={props.toggleMenu}>
        <i className="fas fa-lg fa-bars"></i>
      </div>
      <div className="mobile-nav-inner-container">
        <Link className="mobile-landscape-link" to="/">
          <img
            className="mobile-logo-landscape"
            src="https://mushrohms.io/images/Logo_Landscape.png"
            alt="Mushrohms Logo"
          />
        </Link>
      </div>
    </div>
  );
}

export default MobileNav;
