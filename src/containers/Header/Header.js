import React from "react";
import { Nav } from "../";
import { NavItem } from "../../components";
import "./Header.scss";

const Header = () => (
  <header className="app-header">
    <NavItem className="logo" path="/" label="Random Users" />
    <Nav />
  </header>
);

export default Header;
