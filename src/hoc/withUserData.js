import React, { Component } from "react";
import sorter from "../utils/sorter";

const withUserData = (WrappedComponent, DataSource) => {
  return class WithUserData extends Component {
    _data: null;

    state = {
      filteredData: null
    };

    componentDidMount = async () => {
      const me = this;
      // TODO: abstract "users" so withUserData can become reusable withData
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

      if (dir === "") {
        this.setState({ filteredData: this._data.slice(0) });
      } else {
        let newResults = this.state.filteredData;
        // TODO: move sort logic to DataSource?
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

export default withUserData;
