import "./MobileNavMenu.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const featuresLinks = [
  { text: "Sporedrops", href: "/#sporedrops" },
  { text: "Shrohmie Council", href: "/shrohmie-council" },
  { text: "Metaverse", href: "/features/metaverse" },
  { text: "VR Mushrohm Kingdom", href: "/coming-soon" },
];

const collectionsLinks = [
  { text: "1st Gen Mushrohms", href: "/#first-gen-shrohms" },
  { text: "Descendant Mushrohms", href: "/#descendant-shrohms" },
  { text: "Mushrohm Friends", href: "/#mushrohm-friends" },
];

const partnershipLinks = [
  { text: "Olympus Odyssey", href: "https://www.olympusdao.finance/" },
  { text: "Treasure DAO", href: "https://www.treasure.lol/" },
];

const renderLinkComponent = ({ link, ...props }) => {
  const inside = <div>{link.text}</div>;

  if (link.href.startsWith("/#")) {
    return (
      <HashLink
        onClick={props.toggleMenu}
        key={link.href}
        className="mobile-menu-link"
        to={link.href}
      >
        {inside}
      </HashLink>
    );
  } else if (link.href.startsWith("/")) {
    return (
      <Link
        onClick={props.toggleMenu}
        key={link.href}
        className="mobile-menu-link"
        to={link.href}
      >
        {inside}
      </Link>
    );
  } else {
    return (
      <a
        key={link.href}
        className="mobile-menu-link"
        href={link.href}
        target="_blank"
        rel="noreferrer"
      >
        {inside}
      </a>
    );
  }
};

function MenuTrigger(props) {
  return (
    <div>
      <div className="mobile-menu-trigger-container">
        <div onClick={props.toggleIsActive} className="mobile-menu-trigger">
          <span className="mobile-menu-link">{props.label}</span>
          <div>
            <i className="fas fa-xs fa-chevron-down"></i>
          </div>
        </div>
      </div>
      {props.isActive && (
        <div className="mobile-menu-link-list">
          {props.links.map((link) => renderLinkComponent({ ...props, link }))}
        </div>
      )}
    </div>
  );
}

function MobileNavMenu(props) {
  const [activeMenuItem, setIsActive] = useState(null);

  const toggleIsActive = (newActiveMenuItem) => {
    if (newActiveMenuItem === activeMenuItem) {
      setIsActive(null);
    } else {
      setIsActive(newActiveMenuItem);
    }
  };

  return (
    <div className="mobile-menu-container">
      <div className="mobile-menu-link">
        <a
          href="https://opensea.io/collection/mushrohms"
          target="_blank"
          rel="noreferrer"
        >
          <span>Buy a Mushrohm</span>
        </a>
      </div>
      <MenuTrigger
        toggleMenu={props.toggleMenu}
        isActive={activeMenuItem === "collections"}
        toggleIsActive={() => toggleIsActive("collections")}
        label={"Collections"}
        links={collectionsLinks}
      />
      <MenuTrigger
        toggleMenu={props.toggleMenu}
        isActive={activeMenuItem === "features"}
        toggleIsActive={() => toggleIsActive("features")}
        label={"Features"}
        links={featuresLinks}
      />

      <div className="mobile-menu-link">
        <a
          href="https://dune.xyz/Mighaz/MUSHROHMS-NFT"
          target="_blank"
          rel="noreferrer"
        >
          <span>Analytics</span>
        </a>
      </div>
      <MenuTrigger
        toggleMenu={props.toggleMenu}
        isActive={activeMenuItem === "partnerships"}
        toggleIsActive={() => toggleIsActive("partnerships")}
        label={"Partnerships"}
        links={partnershipLinks}
      />
    </div>
  );
}

export default MobileNavMenu;
