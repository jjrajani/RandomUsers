import React from "react";
import { mount } from "enzyme";
import BornPerDecadeBar from "./BornPerDecadeBar";

describe("BornPerDecadeBar", () => {
  const defaultProps = {};

  it(`renders without crashing`, () => {
    mount(<BornPerDecadeBar {...defaultProps} />);
  });
});
