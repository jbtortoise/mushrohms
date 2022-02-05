import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-divider"></div>
      <div className="footer-container">
        <img
          className="footer-shrohm-logo"
          src="https://mushrohms.io/images/Logo-04.png"
          alt="Mushrohms Logo"
        />
        <div className="footer-text-container">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discord.gg/QUtph52z"
            >
              <img
                src="https://mushrohms.io/images/icon-discord.png"
                alt="discord logo"
                className="footer-social-logo discord"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Mushrohms"
            >
              <img
                src="https://mushrohms.io/images/icon-twitter.png"
                alt="twitter logo"
                className="footer-social-logo twitter"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://opensea.io/collection/mushrohms"
            >
              <img
                src="https://mushrohms.io/images/icon-opensea.png"
                alt="opensea logo"
                className="footer-social-logo"
              />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://etherscan.io/address/0x133ba8f869f3ae35a5ca840ba20acfa31b0e2a61"
            >
              <img
                src="https://mushrohms.io/images/icon-etherscan.png"
                alt="etherscan logo"
                className="footer-social-logo"
              />
            </a>
          </div>
          <div className="footer-copyright">&copy; 2022 Mushrohms</div>
          <div className="footer-created-by">Created by Nenpools with love</div>
        </div>
      </div>
    </>
  );
}

export default Footer;
