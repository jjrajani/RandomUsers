import React from "react";
import { NavItem } from "../../components";
import "./Nav.scss";

const Nav = () => (
  <nav className="main-nav">
    <ul className="nav-items">
      <NavItem path="/" label="Home" />
      <NavItem path="/grid/" label="Grid" />
    </ul>
  </nav>
);

export default Nav;
