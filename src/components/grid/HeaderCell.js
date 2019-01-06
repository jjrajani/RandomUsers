import React, { Component } from "react";
import PropTypes from "prop-types";
import SortButton from "./SortButton";

export default class HeaderCell extends Component {
  render() {
    const { hasSort, label, onSortClick } = this.props;
    let sortable = this.props.sortable || false;
    const onClick = sortable ? onSortClick : () => {};
    return (
      <th className="header-cell">
        <div className="fixed">
          {label}
          <SortButton
            onClick={onClick}
            hasSort={hasSort}
            disabled={!sortable}
          />
        </div>
      </th>
    );
  }
}

HeaderCell.propTypes = {
  // PropTypes
  sortable: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onSortClick: PropTypes.func,
  hasSort: PropTypes.bool
};
