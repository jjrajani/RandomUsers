import React from "react";
import "./UsersStats.scss";
import {
  BornPerDecadeBar,
  GenderBar,
  UsersLocations
} from "../../components/users_stats";
import { RandomUsersDataSource } from "../../data_sources";
import { withData } from "../../hoc";

const UsersStats = props => {
  console.log("props", props);
  return (
    <div className="users-stats">
      <h2>Users Stats</h2>
      <BornPerDecadeBar data={props.data} />
      <GenderBar data={props.data} />
      <UsersLocations data={props.data} />
    </div>
  );
};

export default withData(UsersStats, new RandomUsersDataSource());
