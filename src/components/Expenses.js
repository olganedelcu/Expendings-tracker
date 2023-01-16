import ExpenseItem from "./Expenseltem";


function Expenses(items) {
  
  return (
  <div className = "expenses">
    <ExpenseItem
        title={items.expenses[0].title}
        amount={items.expenses[0].amount}
        date={items.expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={items.expenses[1].title}
        amount={items.expenses[1].amount}
        date={items.expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={items.expenses[2].title}
        amount={items.expenses[2].amount}
        date={items.expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
      title={items.expenses[3].title}
      amount={items.expenses[3].amount}
      date={items.expenses[3].date}
    ></ExpenseItem>
  </div>
  );
}

export default Expenses;
