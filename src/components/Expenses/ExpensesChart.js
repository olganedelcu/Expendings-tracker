import React from "react";

import Chart from "./Chart/Chart.js";

const ExpensesChart = (props) => {
  const chartDataPoints = [{ label: "Jan", value: 0 }];

  return (
    <>
      <Chart />
    </>
  );
};

export default ExpensesChart;
