import React from 'react';

import AddTaskIcon from './AddTaskIcon';
import classes from './AddTaskButton.module.css'


const AddTaskButton = props => {
    return (
        <button  onClick={props.onAddItem}>
            <span >
                <AddTaskIcon />
            </span>
            <span>ADD TASK</span>
        </button>
    )
};

export default AddTaskButton;