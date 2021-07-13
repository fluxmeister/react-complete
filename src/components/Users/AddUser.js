import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "../Users/AddUser.module.css" ;

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState(''); // array destructuring
  const [enteredAge, setEnteredAge] = useState(''); // array destructuring


  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(enteredUsername, enteredAge);
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
        <input id="username" type="text" onChange={usernameChangeHandler} />
        <label htmlFor="username">Узраст (године)</label>
        <input id="age" type="number" onChange={ageChangeHandler} />
        <Button type="submit">Додај корисника</Button>
      </form>
    </Card>
  );
};

export default AddUser;
