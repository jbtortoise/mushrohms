import "./index.css";
import "./HomePage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
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
            <h4 className="welcome-title-1">Welcome to the </h4>
            <h2 className="welcome-title-2">Mushrohm Kingdom</h2>
            <p className="welcome-text-content">
              At the top of Mt. Olympus grow the fungi of the gods: MUSHROHMS!
              Meditating in infinite ohming bliss, these enlightened creatures
              will one day reach down from the mountaintop to change the
              consciousness of this world and beyond!
            </p>
          </div>
          <div className="welcome-image-container">
            <video
              controls
              controlsList="nodownload"
              disablePictureInPicture
              className="glow-mp4"
              autoPlay
              muted
              poster="https://mushrohms.io/images/glow-mushrohm.png"
            >
              <source
                src="https://mushrohms.mypinata.cloud/ipfs/QmQjiYprtgJh9Ex26Eii3XtwqGAJfhcLmun4CrVYEHjTcx/MP4/Glow.Mushrohm.mp4"
                type="video/mp4"
              ></source>
              Sorry, this browser doesn't support embedded videos.
            </video>
            <div className="image-label">Glow Mushrohm</div>
          </div>
        </section>

        <section id="first-gen-shrohms" className="first-gen-container">
          <h2 className="color-orange">1st Gen Mushrohms</h2>
          <p className="first-gen-text">
            These 1,500 1st Generation Mushrohms are the premier collection of
            the Mushrohm Kingdom on Ethereum Mainnet. These powerful Shrohms
            feature many unique properties that qulify for a reproductive
            Sporedrop mechanism, as well as allow membership access to the{" "}
            <Link to="/features/shrohmie-council" className="inline-link">
              Shrohmie Council
            </Link>
            , where members are able to contribute to the direction of the
            project, help manage the Shrohmie Treasury, and receive access to
            exclusive discord channels. Soon the 1st Gen Mushrohms will be able
            to join the Treasure DAO Bridgeworld metaverse via a unique
            reversible NFT{" "}
            <Link to="/features/bridgeworld" className="inline-link">
              Trasmutation Bridge
            </Link>{" "}
            from Eth Mainnet to Arbitrum Network. View the collection{" "}
            <a
              className="inline-link"
              href="https://opensea.io/collection/mushrohms"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>
            .
          </p>
          <div className="first-gen-image-row">
            <div className="first-gen-image-container">
              <img
                className="first-gen-image"
                src="https://mushrohms.io/images/chanterelle-mushrohm.png"
                alt="Chanterelle Mushrohm"
              />
              <div className="image-label">Chanterelle Mushrohm</div>
            </div>
            <div className="first-gen-image-container">
              <img
                className="first-gen-image"
                src="https://mushrohms.io/images/pe-mushrohm.png"
                alt="PE Mushrohm"
              />
              <div className="image-label">P.E. Mushrohm</div>
            </div>
            <div className="first-gen-image-container">
              <img
                className="first-gen-image"
                src="https://mushrohms.io/images/cerberus-mushrohm.png"
                alt="Cerberus Mushrohm"
              />
              <div className="image-label">Cerberus Mushrohm</div>
            </div>
          </div>
        </section>
        <section className="descendants-container">
          <h2 className="color-orange" id="descendant-shrohms">
            Descendants
          </h2>
          <div className="descendants-content-container">
            <div className="descendants-text-container">
              <p>
                Mushrohms: Descendants are the newest addition to the Mushrohms
                collection, born of the Prometheus and Hades Sporedrops. The
                Prometheus Sporedrop released the gifts of fiery insight across
                Mt. Olympus, while the Hades Sporedrop brought from the
                Underworld the wisdom of the great beyond! Both grew from unique
                Spore NFTs airdropped to holders of a 1st Gen via the sporedrop
                mechanism, and are currently on the Polygon Network.
              </p>
              <p>
                Descendant Mushrohms qualify holders for exclusive whitelists
                within the Olympus Odyssey ecosystem, as well as a unique V4
                Pool Together function. View the collection{" "}
                <a
                  className="inline-link"
                  href="https://opensea.io/collection/mushrohms-descendants"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
            </div>
            <div className="descendants-image-container">
              <video
                controls
                controlsList="nodownload"
                disablePictureInPicture
                className="glow-mp4"
                autoPlay
                loop
                muted
                poster="https://mushrohms.io/images/soul-harvest-mushrohm.png"
              >
                <source
                  src="https://threethree.mypinata.cloud/ipfs/Qma9s32ZaSEvKxeN1BuinpRTKuNcyozcDPqsKSM3HCYtNZ/Hades_MP4/SoulHarvest.Mushrohm.mp4"
                  type="video/mp4"
                ></source>
                Sorry, this browser doesn't support embedded videos.
              </video>
              <div className="image-label">Soul Harvest Mushrohm</div>
            </div>
          </div>
          <div className="descendants-image-row">
            <div className="descendants-image-container">
              <img
                className=""
                src="https://mushrohms.io/images/clear-light-mushrohm.png"
                alt="Clear Light Mushrohm"
              />
              <div className="image-label">Clear Light Mushrohm</div>
            </div>
            <div className="descendants-image-container">
              <img
                className=""
                src="https://mushrohms.io/images/river-styx-mushrohm.png"
                alt="River Styx Mushrohm"
              />
              <div className="image-label">River Styx Mushrohm</div>
            </div>
            <div className="descendants-image-container">
              <img
                className=""
                src="https://mushrohms.io/images/beardedheph-mushrohm.png"
                alt="Bearded Heph Mushrohm"
              />
              <div className="image-label">Bearded Heph Mushrohm</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default HomePage;
