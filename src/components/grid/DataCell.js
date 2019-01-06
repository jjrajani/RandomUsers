import React from "react";
import PropTypes from "prop-types";

const DataCell = ({ children }) => {
  return <td className="data-cell">{children}</td>;
};

DataCell.propTypes = {
  children: PropTypes.string
};

export default DataCell;
