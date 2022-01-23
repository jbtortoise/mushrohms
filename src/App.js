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
      <div className="page-content">
        <section className="welcome-container">
          <div className="welcome-text-container">
            <h2 className="welcome-title">Welcome to the Mushrohm Kingdom</h2>
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
          <h2>1st Gen Mushrohms</h2>
          <p>
            These 1,500 1st Generation Mushrohms are the premier collection of
            the Mushrohm Kingdom on Ethereum Mainnet. These powerful Shrohms
            feature many unique properties that qulify for a reproductive
            Sporedrop mechanism, as well as allow membership access to the
            Shrohmie Council, where members are able to contribute to the
            direction of the project, help manage the Shrohmie Treasury, and
            receive access to exclusive discord channels. Soon the 1st Gen
            Mushrohms will be able to join the Treasure DAO Bridgeworld
            metaverse via a unique reversible NFT Trasmutation Bridge from Eth
            Mainnet to Arbitrum Network.
          </p>
          <div className="first-gen-image-row">
            <div className="first-gen-image-container">
              <img
                className="first-gen-image"
                src="https://mushrohms.io/images/chanterelle-mushrohm.png"
                alt="Chanterelle Mushrohm"
              />
              <div className="first-gen-image-label">Chanterelle Mushrohm</div>
            </div>
            <div className="first-gen-image-container">
              <img
                className="first-gen-image"
                src="https://mushrohms.io/images/pe-mushrohm.png"
                alt="PE Mushrohm"
              />
              <div className="first-gen-image-label">P.E. Mushrohm</div>
            </div>
            <div className="first-gen-image-container">
              <img
                className="first-gen-image"
                src="https://mushrohms.io/images/cerberus-mushrohm.png"
                alt="Cerberus Mushrohm"
              />
              <div className="first-gen-image-label">Cerberus Mushrohm</div>
            </div>
          </div>
        </section>
        <section className="sporedrops-container">
          <h2 id="sporedrops">Sporedrops</h2>
          <div className="sporedrops-content-container">
            <p>
              Sporedrops are a unique airdrop mechanism of 1st Gen Mushrohms,
              and work to grow the Mushrohms mycelial network to new chains and
              environments. 1st Gen Mushrohms qualify for a sporedrop depending
              on their unique properties. So far the two properties have
              received a sporedrop are the Dawn and Night properties.
              <br />
              All holders of a 1st Gen Dawn Mushrohm were airdropped a special
              Prometheus Spore NFT, and all holders of a 1st Gen Night Mushrohm
              were airdropped a special Hades Spore NFT, both on the Polygon
              Network. In addition, new participants were given a chance to
              whitelist for the sporedrop. Nine days after the initial
              sporedrop, the Hades Spore and Prometheus Spore grew into one of
              four unique rarity tiers of new Descendant Mushrohms.
              <br />
              1st Gen Mushrohms will continue to receive new sporedrops over
              time, thought the qualifying properties and blockhain remain
              unrevealed. Through sporedrops, Mushrohms continue to colonize new
              environments and expand their Kingdom!
            </p>
            <div>HADES SPORE GIF</div>
          </div>
        </section>
        <section className="Descendants-container">
          <h2 id="descendants">Descendants</h2>
          <div className="descendants-content-container">
            <p>
              Mushrohms: Descendants are the newest addition to the Mushrohms
              collection, born of the Prometheus and Hades Sporedrops. The
              Prometheus Sporedrop released the gifts of fiery insight across
              Mt. Olympus, while the Hades Sporedrop brought from the Underworld
              the wisdom of the great beyond! Both grew from unique Spore NFTs
              airdropped to holders of a 1st Gen via the sporedrop mechanism,
              and are currently on the Polygon Network.
              <br />
              Descendant Mushrohms qualify holders for exclusive whitelists
              within the Olympus Odyssey ecosystem, as well as a unique V4 Pool
              Together function.
            </p>
            <div>
              <img
                className="descendant-image"
                src="https://mushrohms.io/images/soul-harvest-mushrohm.png"
                alt="Cerberus Mushrohm"
              />
              <div className="descendant-image-label">
                Soul Harvest Mushrohm
              </div>
            </div>
          </div>
        </section>

        <img
          className=""
          src="https://mushrohms.io/images/clear-light-mushrohm.png"
          alt="Cerberus Mushrohm"
        />
        <img
          className=""
          src="https://mushrohms.io/images/river-styx-mushrohm.png"
          alt="Cerberus Mushrohm"
        />
        <img
          className=""
          src="https://mushrohms.io/images/bearded-heph-mushrohm.png"
          alt="Cerberus Mushrohm"
        />
      </div>
      <footer>SHROHM LOGO</footer>
    </div>
  );
}

export default App;
