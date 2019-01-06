import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Grid.scss";
import { DataCell, GridRow, HeaderCell } from "../../";
import * as utils from "../../../utils";

class Grid extends Component {
  state = {
    sortedCol: ""
  };
  headerRow = () => {
    const {
      config: { columns }
    } = this.props;

    return (
      <GridRow className="header">
        {columns.map((col, i) => {
          return (
            <HeaderCell
              key={`${col.label}-${i}`}
              sortable={col.sortable}
              hasSort={this.state.sortedCol === col.label}
              onSortClick={this.onSortClick.bind(null, col)}
              label={col.label}
            />
          );
        })}
      </GridRow>
    );
  };

  onSortClick = (col, dir) => {
    this.setState({ sortedCol: col.label });
    this.props.sortData(col.dataAccr, dir, col.dataType);
  };

  gridTitleRow = () => {
    const { title } = this.props;

    return title ? (
      <tr className="grid-title">
        <th>{title}</th>
      </tr>
    ) : null;
  };

  rowDataCells = data => {
    const {
      config: { columns }
    } = this.props;

    let dataCells = columns.map((cell, i) => {
      const { dataAccr, dataType, formatter } = cell;

      let formattedData = utils.getFormattedDataFromAccr({
        data,
        accr: dataAccr,
        type: dataType,
        formatterConfig: formatter
      });

      return <DataCell key={`${dataAccr}-${i}`}>{formattedData}</DataCell>;
    });

    return dataCells;
  };

  rows = () => {
    const { data } = this.props;
    let rows = [];

    if (data) {
      rows = data.map((d, i) => {
        return (
          <GridRow key={`${d.id.value || i}`}>{this.rowDataCells(d)}</GridRow>
        );
      });
    }

    return rows;
  };

  render() {
    const { title } = this.props;
    return (
      <div className="grid">
        <section>
          {title && <th className="grid-title">{title}</th>}
          <div className="container">
            <table className="grid-table">
              <thead className="grid-header">{this.headerRow()}</thead>

              <tbody className="grid-body">{this.rows()}</tbody>
            </table>
          </div>
        </section>
      </div>
    );
  }
}

Grid.propTypes = {
  title: PropTypes.string,
  config: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        dataAccr: PropTypes.string.isRequired,
        dataType: PropTypes.string
      })
    )
  })
};

export default Grid;
