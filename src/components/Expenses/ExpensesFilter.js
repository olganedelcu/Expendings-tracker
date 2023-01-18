import React, { useState } from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    const [selectedYear, setSelectedYear] = useState('2023'); // initial value empty string

    const selectedYearHandler = (selectedYear) => {
        setSelectedYear(selectedYear.target.value);
    }
    console.log(selectedYear);    
    props.onSaveYearSelected();
    setSelectedYear('')

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={selectedYearHandler} value={selectedYear}>
          <option value="2022">2023</option>
          <option value="2021">2022</option>
          <option value="2020">2021</option>
          <option value="2019">2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
