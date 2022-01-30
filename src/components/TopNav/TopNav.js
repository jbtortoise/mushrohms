import DesktopNav from "../DesktopNav/DesktopNav";
import MobileNav from "../MobileNav/MobileNav";
import MobileNavMenu from "../MobileNavMenu/MobileNavMenu";
import { useState } from "react";

function TopNav() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

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
