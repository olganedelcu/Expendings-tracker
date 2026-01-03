import React, { useState } from 'react';
import Card from '../UI/Card.js';
import ExpenseFilter from './ExpensesFilter.js';
import ExpensesChart from './ExpensesChart.js';
import ExpensesList from './ExpensesList.js';
import './Expenses.css';



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2026");

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
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;


