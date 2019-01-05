import React, { Component } from "react";
import PropTypes from "prop-types";
import { DataCell, GridRow, HeaderCell } from "../../";

class Grid extends Component {
  headerRow = () => {
    const {
      config: { columns },
      data
    } = this.props;
    console.log("columns", columns);
    console.log("data", data);
    return (
      <GridRow>
        <HeaderCell>what</HeaderCell>
      </GridRow>
    );
  };
  render() {
    console.dir(this.props);
    return (
      <div>
        Grid
        <table>
          <tbody>
            {this.headerRow()}
            <GridRow>
              <DataCell>up</DataCell>
            </GridRow>
          </tbody>
        </table>
      </div>
    );
  }
}

Grid.propTypes = {
  config: PropTypes.shape()
};

export default Grid;
