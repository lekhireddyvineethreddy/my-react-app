  // import './ExpenseDate.css'
  // import './Expenseitem.css'
 function ExpenseDetails (props) {

    return (
        <div>
            <h2>{props.title}</h2>
             <h2>{props.location}</h2>
             <div className="expense-item__price">${props.amount}</div>

        </div>
        
    );
 }
 export default ExpenseDetails;