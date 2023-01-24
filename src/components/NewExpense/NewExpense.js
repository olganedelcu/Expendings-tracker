import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const NewExpense = (props) => {
  const [isEditing, setItEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setItEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}{" "}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />}{" "}
    </div>
  );
};

export default NewExpense;
