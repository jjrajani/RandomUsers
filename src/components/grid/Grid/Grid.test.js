import React from "react";
import { shallow } from "enzyme";
import Grid from "./Grid";
import * as TYPES from "../../../types";

describe("Grid", () => {
  const defaultProps = {
    config: {
      columns: [
        { label: "column 1", dataAccr: "col1", dataType: TYPES.STRING },
        { label: "column 2", dataAccr: "col2", dataType: TYPES.STRING }
      ]
    },
    data: {
      results: [
        {
          col1: "col1 test data 1",
          col2: "col2 test data 1",
          id: { value: "0" }
        },
        {
          col1: "col1 test data 2",
          col2: "col2 test data 2",
          id: { value: "1" }
        }
      ]
    }
  };

  it(`renders without crashing`, () => {
    shallow(<Grid {...defaultProps} />);
  });
});
