import "./App.css";
import TopNav from "./components/TopNav/TopNav.js";

function App() {
  return (
    <div className="app-container">
      <header>
        <TopNav />
      </header>
      <div className="banner-image-container">
        <img
          className="banner-image"
          src="https://mushrohms.io/images/mushrohms-kingdom-banner.png"
          alt="Mushrohm Kingdom"
        />
      </div>

      <section className="welcome-container">
        <div className="welcome-text-container">
          <div className="welcome-title">Welcome to the Mushrohm Kingdom</div>
          <p className="welcome-text-content">
            At the top of Mt. Olympus grow the fungi of the gods: MUSHROHMS!
            Meditating in infinite ohming bliss, these enlightened creatures
            will one day reach down from the mountaintop to change the
            consciousness of this world and beyond!
          </p>
        </div>
        <div className="welcome-image-container">
          <img
            src="https://mushrohms.io/images/glow-mushrohm.png"
            alt="Glow Mushrohm"
          />
          <div className="welcome-image-label">Glow Mushrohm</div>
        </div>
      </section>

      <section className="first-gen-container">
        <div>1st Gen Mushrohms</div>
        <p>
          These 1,500 1st Generation Mushrohms are the premier collection of the
          Mushrohm Kingdom on Ethereum Mainnet. These powerful Shrohms feature
          many unique properties that qulify for a reproductive Sporedrop
          mechanism, as well as allow membership access to the Shrohmie Council,
          where members are able to contribute to the direction of the project,
          help manage the Shrohmie Treasury, and receive access to exclusive
          discord channels. Soon the 1st Gen Mushrohms will be able to join the
          Treasure DAO Bridgeworld metaverse via a unique reversible NFT
          Trasmutation Bridge from Eth Mainnet to Arbitrum Network.
        </p>
        <div className="first-gen-image-container">
          <img
            className="first-gen-image"
            src="https://mushrohms.io/images/chanterelle-mushrohm.png"
            alt="Chanterelle Mushrohm"
          />
          <img
            className="first-gen-image"
            src="https://mushrohms.io/images/pe-mushrohm.png"
            alt="PE Mushrohm"
          />
          <img
            className="first-gen-image"
            src="https://mushrohms.io/images/cerberus-mushrohm.png"
            alt="Cerberus Mushrohm"
          />
        </div>
      </section>
      <div id="sporedrops">sporedrops</div>
    </div>
  );
}

export default App;
