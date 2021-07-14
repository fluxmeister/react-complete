import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "../Users/AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState(""); // array destructuring
  const [enteredAge, setEnteredAge] = useState(""); // array destructuring

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // A function which is triggered on every keystroke on input
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  return (
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
  );
};

export default AddUser;
