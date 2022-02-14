import "./Bridgeworld.css";

function Bridgeworld() {
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
        <h2 className="color-orange">Mushrohms in Bridgeworld</h2>
        <p>
          Mushrohms are joining the Treasure DAO Bridgeworld metaverse, where
          they will have unique utilities along with the many NFT projects
          within the ecosystem. The Treasure DAO Bridgeworld currently features
          Smolbrains, Smolbodies, Legions, and Treasure NFTs, and will soon
          incorporate new projects into their metaverse, where players are able
          to explore, quest, and mine for $MAGIC.
        </p>
        <div className="highlight-container">
          <img
            className="sporepower-shrohm"
            src="https://mushrohms.io/images/stake-for-sporepower.jpeg"
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
          unique reversible NFT Transmutation Bridge from Ethereum Mainnet to
          Arbitrum Network. In this process a holder of a 1st Gen Mushrohm can
          stake their 3D Mushrohm on Eth Mainnet and withdraw a pixel version of
          that same 1st Gen Mushrohm on the Arbitrum Network, where it can then
          be utilized in the Treasure Bridgeworld metaverse and staked to build
          up Sporepower. If the holder wishes, they can always bridge their 1st
          Gen Treasure Mushrohm back to Eth Mainnet. Keep in mind that only one
          version of the 1st Gen Mushrohm can be active at a time, which means
          that if the 1st Gen Treasure Mushrohm is sold on Arbitrum, the holder
          will no longer be able to access their 1st Gen Eth Mainnet Mushrohm,
          and vice versa.
        </p>
        <p className="transmutation-p3">
          Sporepower aims to be a versatile energy source within the Bridgeworld
          ecosystem. Mushrohms default at 0% Sporepower, and can be staked to
          begin accruing Sporepower. The rarity of the Mushrohm affects the
          speed at which Sporepower is accrued, so for example a 1/1 Mushrohm
          will be able to accrue Sporepower much faster than a 1/100. Once a
          Mushrohm is charged to 100% Sporepower, it can be unstaked and
          utilized in Bridgeworld. When the Sporepower is spent, say for
          crafting a consumable NFT, the Mushrohm returns to its reduced
          Sporepower level (75%, 50%, 25%, or 0%) and must be restaked to begin
          accruing Sporepower again. Thus the Mushrohm cycle of life begins
          again.
        </p>
        <div className="bridgeworld-image-row">
          <div className="first-gen-image-container">
            <img
              className="first-gen-image"
              src="https://mushrohms.io/images/amanita-treasure-prototype.png"
              alt="Fly Amanita Mushrohm"
            />
            <div className="image-label">Fly Amanita Mushrohm</div>
          </div>
          <div className="first-gen-image-container">
            <img
              className="first-gen-image"
              src="https://mushrohms.io/images/glow-treasure-prototype.png"
              alt="Glow Mushrohm"
            />
            <div className="image-label">Glow Mushrohm</div>
          </div>
          <div className="first-gen-image-container">
            <img
              className="first-gen-image"
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

export default Bridgeworld;
