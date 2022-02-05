import "./NavLinks.css";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { useState, useEffect } from "react";

const featuresLinks = [
  { text: "Sporedrops", href: "/#sporedrops" },
  { text: "Shrohmie Council", href: "/shrohmie-council" },
  { text: "Metaverse", href: "/features/metaverse" },
  { text: "VR Mushrohm Kingdom", href: "/features/vr-kingdom" },
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

function NavLinks() {
  const [activeMenu, setActive] = useState(null);
  const onClick = (newActiveMenu) => {
    if (activeMenu === newActiveMenu) {
      setActive(null);
    } else {
      setActive(newActiveMenu);
    }
  };

  useEffect(() => {
    function clearActiveMenus() {
      setActive(null);
    }
    document.addEventListener("click", clearActiveMenus, true);

    return function cleanup() {
      document.removeEventListener("click", clearActiveMenus, true);
    };
  });

  return (
    <div className="nav-links">
      <div className="nav-link">
        <a
          href="https://opensea.io/collection/mushrohms"
          target="_blank"
          rel="noreferrer"
        >
          <span>Buy a Mushrohm</span>
        </a>
      </div>
      <DropdownMenu
        activeMenu={activeMenu}
        onClick={onClick}
        text="Features"
        links={featuresLinks}
      />
      <DropdownMenu
        activeMenu={activeMenu}
        onClick={onClick}
        text="Collections"
        links={collectionsLinks}
      />
      <div className="nav-link">
        <a
          href="https://dune.xyz/Mighaz/MUSHROHMS-NFT"
          target="_blank"
          rel="noreferrer"
        >
          <span>Analytics</span>
        </a>
      </div>
      <DropdownMenu
        activeMenu={activeMenu}
        onClick={onClick}
        text="Partnerships"
        links={partnershipLinks}
      />
    </div>
  );
}

export default NavLinks;
