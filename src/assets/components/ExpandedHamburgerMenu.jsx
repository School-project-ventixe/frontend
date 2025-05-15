import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { HamburgerContext } from "../common/HamburgerContext";

const ExpandedNav = () => {
  const { isExpanded } = useContext(HamburgerContext);

  return (
    <nav className={`expandedNav ${isExpanded ? "active" : ""}`}>
          <NavLink to="/events" className="_navLinks">
            <i class="fa-solid fa-ticket"></i>
            <span>Events</span>
          </NavLink>
          <NavLink to="/bookings" className="_navLinks">
            <i class="fa-regular fa-square-check"></i>
            <span>Bookings</span>
          </NavLink>
    </nav>
  );
};

export default ExpandedNav;
