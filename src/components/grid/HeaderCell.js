import React, { Component } from "react";

export default class HeaderCell extends Component {
  state = {
    dir: ""
  };

  onSortClick = () => {
    let newDir = "asc";
    if (this.state.dir === "dec") {
      newDir = "";
    } else if (this.state.dir === "asc") {
      newDir = "dec";
    }

    this.setState({ dir: newDir });
    this.props.onSortClick(newDir);
  };

  sortButton = () => {
    let className = `sort-button ${this.state.dir}`;
    return (
      <p className={className} onClick={this.onSortClick}>
        Sort
      </p>
    );
  };

  render() {
    const { label, sortable } = this.props;

    return (
      <th className="header-cell">
        {label}
        {sortable && this.sortButton()}
      </th>
    );
  }
}
