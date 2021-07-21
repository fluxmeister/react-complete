import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
import classes from "../Users/AddUser.module.css";


const AddUser = (props) => {
  const nameInputRef = useRef();  // returns a value which allows us to work with that element later
  const ageInputRef = useRef();  
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: 'Неправилан унос!', 
        message: 'Молим, унесите важеће име и године (непразне вредности).',
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: 'Неправилан унос година!', 
        message: 'Молим, унесите важеће године (позитивна вредност).'
    });
    return;
  }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && <ErrorModal
        title={error.title}
        message={error.message}
        onConfirm={errorHandler}
      />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Корисничко име</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Узраст (године)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Додај корисника</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
