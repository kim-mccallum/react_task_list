import React from 'react';
import classes from './Input.module.css';

//wrap component in React.forwardRef to make refs work
const Input = React.forwardRef((props, ref) => {
    //the spread operator {...props.input} makes this highly configurable
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input}/>
        </div>
    );
});

export default Input;