import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {


  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value} // value in relation with our maxValue to fill it correspondly 
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};
export default Chart;
