import React, { Component } from "react";
import sorter from "../utils/sorter";

const withData = (WrappedComponent, DataSource) => {
  return class WithData extends Component {
    _data: null;

    state = {
      filteredData: null
    };

    componentDidMount = async () => {
      const me = this;
      if (localStorage.getItem("users")) {
        console.log("from local");
        me._data = JSON.parse(localStorage.getItem("users"));
        me.setState({
          filteredData: JSON.parse(localStorage.getItem("users"))
        });
      } else {
        await DataSource.fetchData(data => {
          me._data = Object.assign({}, data);
          localStorage.setItem("users", JSON.stringify(data.results));
          me.setState({
            filteredData: data.results.slice(0)
          });
        });
      }
    };

    sortData = (accr, dir, dataType) => {
      const sortConfig = {
        accr,
        dir,
        dataType
      };
      // TODO: move sort logic to DataSource?
      if (dir === "") {
        this.setState({ filteredData: this._data.slice(0) });
      } else {
        let newResults = this.state.filteredData;
        newResults = sorter(newResults, dataType, sortConfig);
        this.setState({ filteredData: newResults });
      }
    };

    filterData = (accr, term) => {
      console.log("filter", accr, term);
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          data={this.state.filteredData}
          filterData={this.filterData}
          sortData={this.sortData}
        />
      );
    }
  };
};

export default withData;
