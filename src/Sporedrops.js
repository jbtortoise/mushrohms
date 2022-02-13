import "./Sporedrops.css";

function Sporedrops() {
  return (
    <div>
      <div className="banner-image-container">
        <img
          className="banner-image"
          src="https://mushrohms.io/images/ensignia-banner-night.png"
          alt="Mushrohm Kingdom"
        />
      </div>

      <div className="sporedrops-container">
        <div className="sporedrops-content-container">
          <div className="sporedrops-text-container">
            <h2 className="color-orange" id="sporedrops">
              Sporedrops
            </h2>
            <p>
              Sporedrops are a unique airdrop mechanism of 1st Gen Mushrohms,
              and work to grow the Mushrohms mycelial network to new chains and
              environments. 1st Gen Mushrohms qualify for a sporedrop depending
              on their unique properties. So far the two properties have
              received a sporedrop are the Dawn and Night properties.
            </p>
            <p>
              All holders of a 1st Gen Dawn Mushrohm were airdropped a special
              Prometheus Spore NFT, and all holders of a 1st Gen Night Mushrohm
              were airdropped a special Hades Spore NFT, both on the Polygon
              Network. In addition, new participants were given a chance to
              whitelist for the sporedrop. Nine days after the initial
              sporedrop, the Hades Spore and Prometheus Spore grew into one of
              four unique rarity tiers of new Descendant Mushrohms.
            </p>
            <p>
              1st Gen Mushrohms will continue to receive new sporedrops over
              time, thought the qualifying properties and blockhain remain
              unrevealed. Through sporedrops, Mushrohms continue to colonize new
              environments and expand their Kingdom!
            </p>
          </div>
          <div className="sporedrops-image-container">
            <img
              src="https://mushrohms.io/images/hades-spore.gif"
              alt="Hades Spore"
            />
            <div className="image-label">Hades Spore</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sporedrops;
