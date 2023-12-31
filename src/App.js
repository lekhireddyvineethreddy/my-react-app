import React from 'react';
import ExpenseItem from "./components/Expenseitem.js";  // Ensure correct capitalization


function App() {
  const expenses = [
    { id:"e1", title:"food" , amount:1000, date:new Date(2023,0,1) , location:'ap' },
    { id:"e2", title:"cooldrinks" , amount:300, date:new Date(2023,1,2) , location:'tn' },
    { id:"e3", title:"petrol" , amount:3000, date:new Date(2023,2,3) , location:'ka' },
    { id:"e4", title:"toll" , amount:3900, date:new Date(2023,3,4) , location:'ts' },
  ];

  return (
    <div>
      <h1>Lets get Started</h1>
      <div>
        {expenses.map(expense => (
          <ExpenseItem
            key={expense.id}  
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          />
        ))}
      </div>
    </div>
  );
}

export default App;