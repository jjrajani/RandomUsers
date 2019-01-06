import React from "react";
import { mount } from "enzyme";
import UsersLocations from "./UsersLocations";

describe("UsersLocations", () => {
  const defaultProps = {};

  it(`renders without crashing`, () => {
    mount(<UsersLocations {...defaultProps} />);
  });
});
