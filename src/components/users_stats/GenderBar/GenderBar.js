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
            // transform {key: year, value: born count} into plot config
            return {
              labels: [...acc.labels, year[0]], // add "0" back to sliced year Ex: 194 back to 1940
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
            name: "",
            type: "bar",
            x: data.labels,
            y: data.values,
            hoverinfo: "percent+name",
            textinfo: "label"
          }
        ]}
        layout={{
          autosize: true,
          title: "Gender Counts",
          showlegend: false
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
