import React, { useEffect, useState } from "react";
import "./Navbar.css";
import menuIcon from "../../assets/menuIcon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setmobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setmobileMenu(false) : setmobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <ul className={mobileMenu ? '' : 'hideMobileMenu'}>
        <li>Home</li>
        <li>About us</li>
        <li>
          <button className="btn">Contact us</button>
        </li>
      </ul>
      <img src={menuIcon} alt="" className="menuIcon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
