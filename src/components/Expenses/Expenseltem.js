import React, { useState } from 'React';
import ExpenseDate from "./ExpenseDate.js";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const Expenseltem = (props) => {
  useState(props.title);
  let title = props.title;
  const clickHandler = () => {
    title = 'Updated!';
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}€</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default Expenseltem;
