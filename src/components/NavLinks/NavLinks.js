import "./NavLinks.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";

function NavLinks() {
  return (
    <div className="nav-links">
      <div className="nav-link">
        <a
          href="https://opensea.io/collection/mushrohms"
          target="_blank"
          rel="noreferrer"
        >
          <span>Buy a Mushrohm</span>
        </a>
      </div>
      <div className="nav-link">Features</div>

      <DropdownMenu text="Collections" />

      <div className="nav-link">Analytics</div>
      <div className="nav-link">Partnerships</div>
    </div>
  );
}

export default NavLinks;
