import React from "react";
import { shallow } from "enzyme";
import Profile from "./Profile";

describe("Profile", () => {
  const defaultProps = {};

  it(`renders without crashing`, () => {
    shallow(<Profile {...defaultProps} />);
  });
});
