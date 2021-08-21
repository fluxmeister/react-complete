import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return <div className={classes.input}>
        <label htmlFor={props.input.id}>{props.label}</label>
        <input ref={ref} {...props.input} />
    </div>
    /* We use the spread operator to spread props.input.
    This ensures that all the key-value pairs in this input object, 
    which we receive on props.input, 
    are added as props to input.
    It's simply a convenient way of making this input highly configurable
    from outside this component, through this input prop here.
    */
});

export default Input;