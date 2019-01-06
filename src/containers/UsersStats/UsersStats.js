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
  return (
    <div className="users-stats main-content">
      <h2 className="title">Users Stats</h2>
      <div className="charts-container">
        <div>
          <BornPerDecadeBar data={props.data} />
          <GenderBar data={props.data} />
        </div>
        <UsersLocations data={props.data} />
      </div>
    </div>
  );
};

export default withData(UsersStats, new RandomUsersDataSource());
