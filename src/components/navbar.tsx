import React, { FC, useState } from "react";
import { NavLink } from "react-router-dom";
import Icon from "./icon";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchNavbar from "./search-navbar";
import Searchbox from "./searchbox";

const Navbar: FC = () => {
  const [showSearchNavbar, setShowSearchNavbar] = useState<boolean>(false);

  const handleSearchIconClick = () => {
    setShowSearchNavbar(true);
  };

  const handleOnCloseNavbar = () => {
    setShowSearchNavbar(false);
  };

  const handleOnSearch = () => {};

  return showSearchNavbar ? (
    <SearchNavbar
      onClose={handleOnCloseNavbar}
      onSearch={handleOnSearch}
      visible={showSearchNavbar}
    />
  ) : (
    <nav className={`nav`}>
      <div className={`nav__panel--left`}>
        <NavLink className={`nav__website-name`} exact to={`/`}>
          {`Movie Browser`}
        </NavLink>
        <Searchbox
          className={`nav__searchbox`}
          placeholder={`Search for a movie...`}
        />
        <Icon
          className={`nav__search-icon`}
          onClick={handleSearchIconClick}
          icon={faSearch}
        />
      </div>
      <ul className={`nav__panel--right`}>
        <li>
          <NavLink className={`nav__link`} exact to={`/`}>
            {`Films`}
          </NavLink>
        </li>
        <li>
          <NavLink className={`nav__link`} exact to={`/watchlist`}>
            {`Watchlist`}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
