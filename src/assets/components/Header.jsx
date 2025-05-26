import React from "react";
import UserProfile from "./UserProfile";

const Header = () => {
  return (
    <header>
      <div className="_seperateHeader">
        <UserProfile/>
        <div className="_roundedBtns">
          <div className="_magnifyingSearch">
            <input
              className="_searchBar"
              type="text"
              placeholder="Search anything"
            />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className="_circle _circletablet">
            <img src="/src/assets/images/magnifyingGlass.svg" alt="" />
          </div>
          <div className="_circle">
            <img src="/src/assets/images/settingswheel.svg" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
