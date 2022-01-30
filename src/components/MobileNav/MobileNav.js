import "./MobileNav.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function MobileNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="mobile-nav-container">
      <div className="hamburger-menu" onClick={toggleMenu}>
        <i class="fas fa-lg fa-bars"></i>
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
      {isMenuOpen ? (
        <div className="mobile-menu-container">Mobile Menu Open!</div>
      ) : null}
    </div>
  );
}

export default MobileNav;
