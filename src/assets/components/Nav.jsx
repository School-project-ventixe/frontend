import React from "react";
import { NavLink } from "react-router-dom";
import HamburgerBtn from "./HamburgerBtn";
import ExpandedNav from "./ExpandedHamburgerMenu";
import { HamburgerProvider } from "../common/HamburgerContext";

const Nav = () => {
  return (
    <HamburgerProvider>
      <nav>
        <div className="_logotype">
          <NavLink to="/">
            <img
              className="_logoImage"
              src="/src/assets/images/logotype.svg"
              alt="logotype"
            />
          </NavLink>
          <span className="_logoName">Ventixe</span>
          <div className="_hamburgerContainer">
            <HamburgerBtn />
            <ExpandedNav />
          </div>
        </div>
        <div className="_linkSeperate">
          <div className="_barLinks">
            <NavLink to="/events" className="_navLinks">
              <i class="fa-solid fa-ticket"></i>
              <span>Events</span>
            </NavLink>
            <NavLink to="/bookings" className="_navLinks">
              <i class="fa-regular fa-square-check"></i>
              <span>Bookings</span>
            </NavLink>
          </div>
          <div className="_navSignOut">
            <NavLink to="/signout" className="_navLinks">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>
              <span>Sign Out</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </HamburgerProvider>
  );
};

export default Nav;
