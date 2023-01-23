import React, { useState } from "react";
import Card from "../UI/Card.js";
import "./Expenses.css";
import ExpenseFilter from "./ExpensesFilter.js";
import ExpensesList from './ExpensesList.js';


const NewExpense = (props) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear; // comparing the year to the Selected year
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default NewExpense;
