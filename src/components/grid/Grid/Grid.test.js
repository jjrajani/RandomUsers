import React from "react";
import { shallow } from "enzyme";
import Grid from "./Grid";

describe("Grid", () => {
  const defaultProps = {};

  it(`renders without crashing`, () => {
    shallow(<Grid {...defaultProps} />);
  });
});
