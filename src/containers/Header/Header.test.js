import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

describe("Header", () => {
  const defaultProps = {};

  it(`renders without crashing`, () => {
    shallow(<Header {...defaultProps} />);
  });
});
