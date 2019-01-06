import React from "react";
import "./BornPerDecadeBar.scss";
import Plot from "react-plotly.js";
import moment from "moment";

const BornPerDecadeBar = props => {
  let data = [];

  if (props.data) {
    data = props.data.reduce((accum, d, i) => {
      let yearBorn = moment(d.dob.date)
        .format("YYYY")
        .slice(0, 3); // slice 3 to get first 3 year digets (decade), Ex: 194 for 1940
      // count how many born per year
      accum[yearBorn] = accum[yearBorn] ? accum[yearBorn] + 1 : 1;

      if (i === props.data.length - 1) {
        // is Last
        accum = Object.entries(accum).reduce(
          (acc, year) => {
            // transform {key: year, value: born count} into plot config
            return {
              labels: [...acc.labels, year[0] + "0"], // add "0" back to sliced year Ex: 194 back to 1940
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
    <div className="born-per-decade chart-wrapper">
      <Plot
        data={[
          {
            name: "",
            type: "pie",
            labels: data.labels,
            values: data.values,
            hoverinfo: "percent+name",
            textinfo: "label"
          }
        ]}
        layout={{
          autosize: true,
          title: "Born Per Decade",
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

export default BornPerDecadeBar;
