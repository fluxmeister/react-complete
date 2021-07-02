import React from "react";
// import ExpenseDate from "../Expenses/ExpenseDate";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const titleChangeHandler = (event) => {
        console.log(event.target.value);
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
                    <input type="number" min="0.01" step="0.01"  />
                </div>
                <div className="new-expense__control">
                    <label>Датум</label>
                    <input type="date" min="2021-07-01" max="2022-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Додај ставку</button>
            </div>
        </form>
    )
};

export default ExpenseForm;