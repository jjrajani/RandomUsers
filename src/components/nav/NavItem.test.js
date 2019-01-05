import React from "react";
import { shallow } from "enzyme";
import NavItem from "./NavItem";

describe("NavItem", () => {
  const defaultProps = {
    label: "Test Label",
    path: "/test/path"
  };

  it(`renders without crashing`, () => {
    shallow(<NavItem {...defaultProps} />);
  });
});
