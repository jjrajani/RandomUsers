import React from "react";
import Grid from "../../components/grid";
import { RandomUsersDataSource } from "../../data_sources";
import { withData } from "../../hoc";

const gridConfig = {
  columns: [
    { label: "DOB", dataAccr: "dob.date" },
    { label: "age", dataAccr: "dob.age" },
    { label: "email", dataAccr: "email" }
  ]
};

const UsersGrid = props => {
  return <Grid config={gridConfig} {...props} />;
};

export default withData(UsersGrid, new RandomUsersDataSource());
