import React from "react";
import { mount } from "enzyme";
import BornPerDecadePie from "./BornPerDecadePie";

describe("BornPerDecadePie", () => {
  const defaultProps = {};

  it(`renders without crashing`, () => {
    mount(<BornPerDecadePie {...defaultProps} />);
  });
});
