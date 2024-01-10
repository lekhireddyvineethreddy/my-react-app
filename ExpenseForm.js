import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

    // Remove unused state variables
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredLocation, setEnteredLocation] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const locationChangeHandler = (event) => {
        setEnteredLocation(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        // Your logic to handle the form submission goes here
        // You can use the enteredTitle, enteredLocation, enteredAmount, and enteredDate states
        // to perform any required actions, like sending the data to a parent component or API.
        alert('Form submitted!'); // Replace this with your actual submission logic
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Location</label>
                    <input type="text" onChange={locationChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="Date" min="1000-01-01" max="3000-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
