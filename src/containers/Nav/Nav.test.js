import React from "react";
import { shallow } from "enzyme";
import Nav from "./Nav";

describe("Nav", () => {
  const defaultProps = {};

  it(`renders without crashing`, () => {
    shallow(<Nav {...defaultProps} />);
  });
});
