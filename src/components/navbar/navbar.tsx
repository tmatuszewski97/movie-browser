import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss";

const Navbar: FC = () => {
  return (
    <nav className={`navbar-container`}>
      <NavLink className={`website-name`} exact to={`/`}>
        {`Movie Browser`}
      </NavLink>
      <ul className={`menu-list`}>
        <li>
          <NavLink className={`menu-link`} exact to={`/`}>
            {`Films`}
          </NavLink>
        </li>
        <li>
          <NavLink className={`menu-link`} exact to={`/watchlist`}>
            {`Watchlist`}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
