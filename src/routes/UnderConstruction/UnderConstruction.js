import "./UnderConstruction.css";
import { ReactComponent as MushrohmsLogo } from "./MushrohmsLogo.svg";
import { ReactComponent as TwitterLogo } from "./TwitterLogo.svg";
import { ReactComponent as DiscordLogo } from "./DiscordLogo.svg";
import { ReactComponent as OlympusLogo } from "./OlympusLogo.svg";
import { ReactComponent as OpenseaLogo } from "./OpenseaLogo.svg";
import { ReactComponent as EtherscanLogo } from "./EtherscanLogo.svg";

function UnderConstruction() {
  return (
    <div className="container">
      <div className="mushrohms-logo">
        <MushrohmsLogo
          viewBox="0 0 325 325"
          preserveAspectRatio="xMidYMid meet"
        />
      </div>
      <div className="social-container">
        <a href="https://discord.gg/QUtph52z">
          <DiscordLogo className="social-logo discord" />
        </a>
        <a href="https://odyssey.olympusdao.finance/#/spores">
          <OlympusLogo className="social-logo olympus" />
        </a>
        <a href="https://twitter.com/Mushrohms">
          <TwitterLogo className="social-logo twitter" />
        </a>
        <a href="https://opensea.io/collection/mushrohms">
          <OpenseaLogo className="social-logo" />
        </a>
        <a
          href="https://etherscan.io/address/0x133ba8f869f3ae35a5ca840ba20acfa31b0e2a61"
          className="etherscan-link"
        >
          <EtherscanLogo className="social-logo" />
        </a>
      </div>
    </div>
  );
}

export default UnderConstruction;
