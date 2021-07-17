import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import classes from "../Users/AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState(""); // array destructuring
  const [enteredAge, setEnteredAge] = useState(""); // array destructuring
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Неправилан унос', 
        message: 'Молим, унесите важеће име и године (непразне вредности).'
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Неправилан унос', 
        message: 'Молим, унесите важеће године (непразне вредности).'
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // A function which is triggered on every keystroke on input
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  return (
    <div>
      <ErrorModal
        title="An error occured!"
        message="Нешто није прошло добро!"
      />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Корисничко име</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="username">Узраст (године)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Додај корисника</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
