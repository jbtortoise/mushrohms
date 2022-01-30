import "./MobileNavMenu.css";
import { useState } from "react";
import { Link } from "react-router-dom";

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

const renderLinkComponent = (link) => {
  const inside = <span className="link-text menu-item-text">{link.text}</span>;

  if (link.href[0] === "/") {
    return <Link to={link.href}>{inside}</Link>;
  } else {
    return (
      <a href={link.href} target="_blank" rel="noreferrer">
        {inside}
      </a>
    );
  }
};

function MenuTrigger(props) {
  return (
    <div>
      <div className="mobile-menu-trigger-container">
        <div onClick={props.toggleIsActive} className="menu-trigger">
          <span
            className={`link-text ${props.isActive ? "active" : "inactive"}`}
          >
            Collections
          </span>
          <div>
            <i className="fas fa-xs fa-chevron-down"></i>
          </div>
        </div>
      </div>
      {props.isActive && <ul>{props.links.map(renderLinkComponent)}</ul>}
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
      <div className="">
        <a
          href="https://opensea.io/collection/mushrohms"
          target="_blank"
          rel="noreferrer"
        >
          <span>Buy a Mushrohm</span>
        </a>
      </div>
      <MenuTrigger
        isActive={activeMenuItem === "collections"}
        toggleIsActive={() => toggleIsActive("collections")}
        label={"Collections"}
        links={collectionsLinks}
      />
      <div>
        Collections
        <ul>
          <li>1st Gen Mushrohms</li>
          <li>Descendant Mushrohms</li>
        </ul>
      </div>
      <div className="">
        <a
          href="https://dune.xyz/Mighaz/MUSHROHMS-NFT"
          target="_blank"
          rel="noreferrer"
        >
          <span>Analytics</span>
        </a>
      </div>
    </div>
  );
}

export default MobileNavMenu;
