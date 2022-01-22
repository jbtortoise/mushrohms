import "./TopNav.css";
import NavLinks from "../NavLinks/NavLinks.js";

function TopNav() {
  return (
    <div className="top-nav-container">
      <div>LOGO HERE</div>
      <NavLinks />
      <div>social links</div>
    </div>
  );
}

export default TopNav;
