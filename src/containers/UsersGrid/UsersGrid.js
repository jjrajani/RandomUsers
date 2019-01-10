import React from "react";
import Grid from "../../components/grid";
import { RandomUsersDataSource } from "../../data_sources";
import { withUserData } from "../../hoc";
import * as TYPES from "../../types";

const gridConfig = {
  columns: [
    {
      label: "First Name",
      dataAccr: "name.first",
      dataType: TYPES.STRING,
      formatter: "capitalize",
      sortable: true
    },
    {
      label: "Last Name",
      dataAccr: "name.last",
      dataType: TYPES.STRING,
      formatter: "capitalize",
      sortable: true
    },
    {
      label: "DOB",
      dataAccr: "dob.date",
      dataType: TYPES.DATE,
      formatter: "MMM Do, YYYY",
      sortable: true
    },
    {
      label: "Age",
      dataAccr: "dob.age",
      dataType: TYPES.NUM,
      formatter: "age",
      sortable: true
    },
    { label: "Email", dataAccr: "email", dataType: TYPES.EMAIL }
  ]
};

const UsersGrid = props => {
  return (
    <div className="users-grid main-content">
      <h2 className="grid-title title">User Grid</h2>
      <Grid {...props} config={gridConfig} />
    </div>
  );
};

export default withUserData(UsersGrid, new RandomUsersDataSource());
