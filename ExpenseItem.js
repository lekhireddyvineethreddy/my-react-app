// ExpenseItem.js
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './Expenseitem.css';
import Card from '../UI/Card';
//import ExpenseFilter from './ExpenseFilter';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickHandler = () => {
    setTitle('New title');
  };

  const changeAmountHandler = () => {
    setAmount(100);
  };

  return (
    <li>
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <ExpenseDetails amount={amount} location={props.location} title={title} />
        <button onClick={clickHandler}>Change title</button>
        <button onClick={changeAmountHandler}>Change Amount</button>
        <button>Delete Expense</button>
    </Card>
    </li>
  );
};

export default ExpenseItem;
