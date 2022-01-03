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
      <MushrohmsLogo className="mushrohms-logo" />
      <div className="social-container">
        <a href="https://discord.gg/QUtph52z">
          <DiscordLogo className="social-link discord" />
        </a>
        <a href="https://odyssey.olympusdao.finance/#/spores">
          <OlympusLogo className="social-link olympus" />
        </a>
        <a href="https://twitter.com/Mushrohms">
          <TwitterLogo className="social-link twitter" />
        </a>
        <a href="https://opensea.io/collection/mushrohms">
          <OpenseaLogo className="social-link" />
        </a>
        <a href="https://etherscan.io/address/0x133ba8f869f3ae35a5ca840ba20acfa31b0e2a61">
          <EtherscanLogo className="social-link etherscan" />
        </a>
      </div>
    </div>
  );
}

export default UnderConstruction;
