import React, { Component } from "react";
import PropTypes from "prop-types";
import FA from "react-fontawesome";
import "./SortButton.scss";

export default class SortButton extends Component {
  state = {
    dir: ""
  };

  /*
  * Sorting sorts in the following order: Asc, Dec, Original
  */
  onSortClick = () => {
    let newDir = "asc";

    if (this.state.dir === "dec") {
      newDir = "";
    } else if (this.state.dir === "asc") {
      newDir = "dec";
    }

    this.setState({ dir: newDir });
    this.props.onClick(newDir);
  };

  componentDidUpdate(prevProps) {
    // When sort leaves column, set dir back to '' to clear out previous state.
    if (prevProps.hasSort === true && this.props.hasSort === false) {
      this.setState({ dir: "" });
    }
  }

  render() {
    const { hasSort, disabled } = this.props;
    const wrapperClassName = disabled ? "sort-button disabled" : "sort-button";
    const iconClassName = hasSort ? this.state.dir : "";

    return (
      <span className={wrapperClassName}>
        <FA
          name="sort-up"
          className={iconClassName}
          onClick={this.onSortClick}
        />
        <FA
          name="sort-down"
          className={iconClassName}
          onClick={this.onSortClick}
        />
      </span>
    );
  }
}

SortButton.propTypes = {
  disabled: PropTypes.bool,
  hasSort: PropTypes.bool,
  onClick: PropTypes.func
};
