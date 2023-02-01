import React from "react";

import Chart from "./Chart/Chart.js";

const ExpensesChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "March", value: 0 },
    { label: "April", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "July", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense in props.expenses) {
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January
    chartDataPoints[expenseMonth].value += expense.amount;
  }
  return (
    <>
      <Chart dataPoints={chartDataPoints} />
    </>
  );
};

export default ExpensesChart;
