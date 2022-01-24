import "./TopNav.css";
import NavLinks from "../NavLinks/NavLinks";

function TopNav() {
  return (
    <div className="top-nav-container">
      <img
        id="logo-landscape"
        src="https://mushrohms.io/images/Logo_Landscape.png"
        alt="Mushrohms Logo"
      />
      <NavLinks />
      <div>social links</div>
    </div>
  );
}

export default TopNav;
