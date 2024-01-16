// Expense.js

import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';

const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // Filter expenses based on the selected year
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString()  === filteredYear;
  });

  return (
    <div>
      {/* Correct the prop name from classNames to className */}
      <Card className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expense;
