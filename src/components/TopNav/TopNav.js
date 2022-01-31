import DesktopNav from "../DesktopNav/DesktopNav";
import MobileNav from "../MobileNav/MobileNav";
import MobileNavMenu from "../MobileNavMenu/MobileNavMenu";
import { useState } from "react";

function TopNav(props) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const $body = document.querySelector("body");

    if (!isMenuOpen) {
      $body.style.overflow = "hidden";
    } else {
      $body.style.removeProperty("overflow");
    }
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isMenuOpen && <MobileNavMenu toggleMenu={toggleMenu} />}
      <header>
        <DesktopNav />
        <MobileNav toggleMenu={toggleMenu} />
      </header>
    </>
  );
}

export default TopNav;
