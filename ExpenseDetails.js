  // import './ExpenseDate.css'
   import './Expenseitem.css'
  import './ExpenseDetail.css';
 function ExpenseDetails (props) {

    return (
        <div className='expense-item__description'> 
            <h2 className="title">{props.title}</h2>
             <h2 className="location">{props.location}</h2>
             <div className="expense-item__price">${props.amount}</div>

        </div>
        
    );
 }
 export default ExpenseDetails;