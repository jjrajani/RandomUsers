import React from "react";
import "./UsersStats.scss";
import {
  BornPerDecadePie,
  GenderBar,
  UsersLocations
} from "../../components/users_stats";
import { RandomUsersDataSource } from "../../data_sources";
import { withUserData } from "../../hoc";

const UsersStats = props => {
  return (
    <div className="users-stats main-content">
      <h2 className="title">Users Stats</h2>
      <div className="charts-container">
        <div>
          <BornPerDecadePie data={props.data} />
          <GenderBar data={props.data} />
        </div>
        <UsersLocations data={props.data} />
      </div>
    </div>
  );
};

export default withUserData(UsersStats, new RandomUsersDataSource());
