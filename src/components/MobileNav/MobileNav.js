import "./MobileNav.css";
import NavLinks from "../NavLinks/NavLinks";
import { Link } from "react-router-dom";

function MobileNav() {
  return (
    <div className="mobile-nav-container">
      <div className="hamburger-menu">
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
    </div>

    // <div className="top-nav-container">

    //   <div>
    //     <a target="_blank" rel="noreferrer" href="https://discord.gg/QUtph52z">
    //       <img
    //         src="https://mushrohms.io/images/icon-discord.png"
    //         alt="discord logo"
    //         className="social-logo discord"
    //       />
    //     </a>
    //     <a
    //       target="_blank"
    //       rel="noreferrer"
    //       href="https://twitter.com/Mushrohms"
    //     >
    //       <img
    //         src="https://mushrohms.io/images/icon-twitter.png"
    //         alt="twitter logo"
    //         className="social-logo twitter"
    //       />
    //     </a>
    //     <a
    //       target="_blank"
    //       rel="noreferrer"
    //       href="https://opensea.io/collection/mushrohms"
    //     >
    //       <img
    //         src="https://mushrohms.io/images/icon-opensea.png"
    //         alt="opensea logo"
    //         className="social-logo"
    //       />
    //     </a>
    //     <a
    //       target="_blank"
    //       rel="noreferrer"
    //       href="https://etherscan.io/address/0x133ba8f869f3ae35a5ca840ba20acfa31b0e2a61"
    //     >
    //       <img
    //         src="https://mushrohms.io/images/icon-etherscan.png"
    //         alt="etherscan logo"
    //         className="social-logo"
    //       />
    //     </a>
    //   </div>
    // </div>
  );
}

export default MobileNav;
