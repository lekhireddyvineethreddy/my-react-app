// App.js

import React, { useState } from 'react';
import NewExpense from './components/NewExpenses/NewExpense';
import Expense from './components/Expenses/Expense';

const App = () => {
  const DUMMY_EXPENSES = [
    { id: "e1", title: "food", amount: 1000, date: new Date(2020, 0, 1), location: 'ap' },
    { id: "e2", title: "cooldrinks", amount: 300, date: new Date(2020, 1, 2), location: 'tn' },
    { id: "e3", title: "petrol", amount: 3000, date: new Date(2020, 2, 3), location: 'ka' },
    { id: "e4", title: "toll", amount: 3900, date: new Date(2020, 3, 4), location: 'ts' },
  ];

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense expenses={expenses} />
    </div>
  );
}

export default App;
