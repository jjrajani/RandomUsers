import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NavItem.scss";

export default class NavItem extends Component {
  render() {
    const { path, label, className } = this.props;
    const itemClassName = "nav-item " + (className || "").trim();

    return (
      <li className={itemClassName}>
        <Link to={path}>{label}</Link>
      </li>
    );
  }
}

NavItem.propTypes = {
  path: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};
