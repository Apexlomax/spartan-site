import * as React from "react";

import MenuIcon from "./assets/menu.svg";
import SpartaIcon from "../../assets/icons/spartav2.svg";
import MobileMenu from "../mobileMenu";

const Navbar = () => {
  const [navOpen, setNavOpen] = React.useState(false);

  const toggleNav = () => {
    if (navOpen) {
      closeNav();
    } else {
      openNav();
    }
  };

  const openNav = () => {
    document.getElementById("myNav").style.display = "flex";
    setNavOpen(true);
  };

  const closeNav = () => {
    document.getElementById("myNav").style.display = "none";
    setNavOpen(false);
  };

  return (
    <div className="flex bg-black w-full p-2 px-4 justify-between fixed z-20">
      <div className="flex align-center w-36">
        <a href="#home">
          <SpartaIcon width="30px" height="30px" />
        </a>
      </div>
      <div className="hidden sm:flex text-white items-center space-x-6 text-lg text-center">
        <a className="hover:opacity-60 transition" href="#home">Home</a>
        <a className="hover:opacity-60 transition" href="#swap">Swap</a>
        <a className="hover:opacity-60 transition" href="#pool">Pool</a>
        <a className="hover:opacity-60 transition" href="#stake">Stake</a>
        <a className="hover:opacity-60 transition" href="#dao">DAO</a>
        <a className="hover:opacity-60 transition" href="#team">Team</a>
        <a className="hover:opacity-60 transition" href="#token">Token</a>
      </div>
      <div className="flex items-center justify-end w-36 pr-2">
        <div className="mr-4 md:hidden block">
          <MenuIcon className="cursor-pointer transition hover:opacity-60" height="20px" fill="white" onClick={() => toggleNav()} />
          <MobileMenu closeNav={closeNav} />
        </div>
        <div>
          <a href="https://dapp.spartanprotocol.org">
            <div className="text-white border text-xs p-1 font-sairaCondensed scale-x-125">
              <div className="px-1.5">OPEN DAPP</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
