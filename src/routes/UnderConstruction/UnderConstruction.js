import "./UnderConstruction.css";
import MushrohmsLogo from "./MushrohmsLogo.svg";
import TwitterLogo from "./TwitterLogo.svg";
import DiscordLogo from "./DiscordLogo.svg";
import OlympusLogo from "./OlympusLogo.svg";
import OpenseaLogo from "./OpenseaLogo.svg";
import EtherscanLogo from "./EtherscanLogo.svg";

function UnderConstruction() {
  return (
    <div className="container">
      <img
        src={MushrohmsLogo}
        alt="Mushrohms logo"
        className="mushrohms-logo"
      />
      {/* <MushrohmsLogo viewBox="0 0 325 325" className="mushrohms-logo" /> */}
      <div className="social-container">
        <a href="https://discord.gg/QUtph52z">
          <img
            src={DiscordLogo}
            alt="discord logo"
            className="social-logo discord"
          />
        </a>
        <a href="https://odyssey.olympusdao.finance/#/spores">
          <img
            src={OlympusLogo}
            alt="olympus logo"
            className="social-logo olympus"
          />
        </a>
        <a href="https://twitter.com/Mushrohms">
          <img
            src={TwitterLogo}
            alt="twitter logo"
            className="social-logo twitter"
          />
        </a>
        <a href="https://opensea.io/collection/mushrohms">
          <img src={OpenseaLogo} alt="opensea logo" className="social-logo" />
        </a>
        <a href="https://etherscan.io/address/0x133ba8f869f3ae35a5ca840ba20acfa31b0e2a61">
          <img
            src={EtherscanLogo}
            alt="etherscan logo"
            className="social-logo"
          />
        </a>
      </div>
    </div>
  );
}

export default UnderConstruction;
