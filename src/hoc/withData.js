import React, { Component } from "react";

const withData = (WrappedComponent, DataSource) => {
  return class Name extends Component {
    state = {
      data: null
    };
    componentDidMount = async () => {
      const me = this;
      await DataSource.fetchData(data => {
        me.setState({ data: data });
      });
    };
    render() {
      return <WrappedComponent {...this.props} data={this.state.data} />;
    }
  };
};

export default withData;
