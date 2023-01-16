import ExpenseDate from './ExpenseDate.js';
import Card from './Card';
import './ExpenseItem.css';


function Expenseltem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.title}</h2> 
        <div className="expense-item__price">{props.amount}€</div>
      </div>
    </Card>
  );
}

export default Expenseltem;
