import React from "react";
import PropTypes from "prop-types";

const GridRow = ({ children, className }) => {
  const rowClass = "grid-row " + (className || "").trim();
  return <tr className={rowClass}>{children}</tr>;
};

GridRow.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string
};

export default GridRow;
