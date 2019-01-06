import React from "react";
import "./GenderBar.scss";
import Plot from "react-plotly.js";

const GenderBar = props => {
  let data = [];

  if (props.data) {
    data = props.data.reduce((accum, d, i) => {
      let gender = d.gender;
      accum[gender] = accum[gender] ? accum[gender] + 1 : 1;

      if (i === props.data.length - 1) {
        // is Last
        accum = Object.entries(accum).reduce(
          (acc, year) => {
            // transform {key: gender, value: gender count} into plot config
            return {
              labels: [...acc.labels, year[0]],
              values: [...acc.values, year[1]]
            };
          },
          {
            labels: [],
            values: []
          }
        );
      }

      return accum;
    }, {});
  }

  return (
    <div className="gender-bar chart-wrapper">
      <Plot
        data={[
          {
            type: "bar",
            x: data.labels,
            y: data.values
          }
        ]}
        layout={{
          autosize: true,
          title: "Users by Gender"
        }}
        config={{ displayModeBar: false }}
        useResizeHandler={true}
        style={{
          width: "40vmin",
          height: "40vmin",
          minWidth: "300px",
          minHeight: "300px"
        }}
      />
    </div>
  );
};

export default GenderBar;
