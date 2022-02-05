import "./Metaverse.css";

function Metaverse() {
  return (
    <div className="">
      <div className="banner-image-container">
        <img
          className="banner-image"
          src="https://mushrohms.io/images/transmutation-bridge.png"
          alt="Mushrohm Kingdom"
        />
      </div>
      <div className="page-content">
        <h2 className="color-orange">Treasure DAO Mushrohms</h2>
        <p>
          Mushrohms are joining the Treasure DAO Bridgeworld metaverse, where
          they will have unique utilities and abilities along with the many NFT
          projects within the ecosystem. The Treasure DAO Bridgeworld currently
          features Smolbrains, Smolbodies, Legions, and Treasure NFTs, and will
          soon incorporate new projects into their metaverse, where players are
          able to explore, quest, and mine for $MAGIC.
        </p>
        <div className="highlight-container">
          <img
            className="sporepower-shrohm"
            src="https://mushrohms.io/images/glow-shrohm-sporepower.png"
            alt="Treasure Night Shrohm"
          />
          <p className="highlight-text">
            1st Gen Mushrohms will be able to bridge to this new frontier via a
            unique reversible NFT Transmutation Bridge from Eth Mainnet to
            Arbitrum Network.
          </p>
        </div>
        <p className="transmutation-p2">
          1st Gen Mushrohms will be able to bridge to this new frontier via a
          unique reversible NFT Transmutation Bridge from Eth Mainnet to
          Arbitrum Network. In this process a holder of a 1st Gen Mushrohm can
          stake their 3D Mushrohm on Eth Mainnet and withdraw a pixel version of
          that same 1st Gen Mushrohm on the Arbitrum Network, where it can then
          be utilized in the Treasure Bridgeworld metaverse and staked to build
          up Sporepower. If the holder wishes, they can always bridge their 1st
          Gen Treasure Mushrohm back to Eth Mainnet. Keep in mind that only one
          version of the 1st Gen Mushrohm can be active at a time, which means
          that if the 1st Gen Treasure Mushrohm is sold on Treasure Marketplace,
          the holder will no longer be able to access their 1st Gen Eth Mainnet
          Mushrohm, and vice versa.
        </p>
        <p className="transmutation-p3">
          In addition to the 1,500 1st Gen Treasure Mushrohms, there will be
          3,500 new Mushrohms exclusive to the Arbitrum Network. These new
          Treasure Mushrohms will not have Eth Mainnet counterparts, and will
          not be as powerful as the 1st Gens in terms of utility and rarity, but
          will have a unique place in the Bridgeworld ecosystem. These exclusive
          Arbitrum Treasure Mushrohms will be whitelisted through a process TBA.
        </p>
        <div className="descendants-image-row">
          <div className="descendants-image-container">
            <img
              className=""
              src="https://mushrohms.io/images/amanita-treasure-prototype.png"
              alt="Fly Amanita Mushrohm"
            />
            <div className="image-label">Fly Amanita Mushrohm</div>
          </div>
          <div className="descendants-image-container">
            <img
              className=""
              src="https://mushrohms.io/images/glow-treasure-prototype.png"
              alt="Glow Mushrohm"
            />
            <div className="image-label">Glow Mushrohm</div>
          </div>
          <div className="descendants-image-container">
            <img
              className=""
              src="https://mushrohms.io/images/golden-teacher-treasure-prototype.png"
              alt="Golden Golden Teacher Mushrohm"
            />
            <div className="image-label">Golden Golden Teacher Mushrohm</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Metaverse;
