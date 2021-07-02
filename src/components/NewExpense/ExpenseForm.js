import React, { useState } from "react";
// import ExpenseDate from "../Expenses/ExpenseDate";
import './ExpenseForm.css';

const ExpenseForm = () => {
    // const [enteredTitle, setEnteredTitle] = useState('');
    // const [enteredAmount, setEnteredAmount] = useState('');
    // const [enteredDate, setEnteredDate] = useState('');
    const [userInput, setUserInput]= useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) => {
        // setEnteredTitle(event.target.value);
        setUserInput({
            ...userInput, 
            enteredTitle: event.target.value, 
            
        })
    };

    const amountChangeHandler = event => {
        // setEnteredAmount(event.target.value);
        ...userInput, 
            enteredAmount: event.target.value, 
    };

    const dateChangehandler = event => {
        // setEnteredDate(event.target.value);
        ...userInput, 
            enteredDate: event.target.value, 
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Назив</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Количина</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Датум</label>
                    <input type="date" min="2021-07-01" max="2022-12-31" onChange={dateChangehandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Додај ставку</button>
            </div>
        </form>
    )
};

export default ExpenseForm;