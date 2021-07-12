import React from "react";
import Card from "../UI/Card";
import classes from "../Users/AddUser.module.css" ;

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Корисничко име</label>
        <input id="username" type="text" />
        <label htmlFor="username">Узраст (године)</label>
        <input id="age" type="number" />
        <button type="submit">Додај корисника</button>
      </form>
    </Card>
  );
};

export default AddUser;
