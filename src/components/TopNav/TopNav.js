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
      <div>
        <a href="https://discord.gg/QUtph52z">
          <img
            src="https://mushrohms.io/images/icon-discord.png"
            alt="discord logo"
            className="social-logo discord"
          />
        </a>
        <a href="https://twitter.com/Mushrohms">
          <img
            src="https://mushrohms.io/images/icon-twitter.png"
            alt="twitter logo"
            className="social-logo twitter"
          />
        </a>
        <a href="https://opensea.io/collection/mushrohms">
          <img
            src="https://mushrohms.io/images/icon-opensea.png"
            alt="opensea logo"
            className="social-logo"
          />
        </a>
        <a href="https://etherscan.io/address/0x133ba8f869f3ae35a5ca840ba20acfa31b0e2a61">
          <img
            src="https://mushrohms.io/images/icon-etherscan.png"
            alt="etherscan logo"
            className="social-logo"
          />
        </a>
      </div>
    </div>
  );
}

export default TopNav;
