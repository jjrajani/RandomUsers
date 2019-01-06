import React from "react";
import { mount } from "enzyme";
import GenderBar from "./GenderBar";

describe("GenderBar", () => {
  const defaultProps = {};

  it(`renders without crashing`, () => {
    mount(<GenderBar {...defaultProps} />);
  });
});
