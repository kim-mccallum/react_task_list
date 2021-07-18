import { useState } from 'react';

import Card from '../UI/Card/Card';
import DragIcon from '../UI/Icons/DragIcon';
import classes from './TaskList.module.css'

const TaskList = prop => {
    const DUMMY_DATA = [{task:'feed boots',id:'t1', status:'pending'}, {task:'fix windows',id:'t2', status:'complete'}]
    return (
        <ul>
        {DUMMY_DATA.map(item => <Card className={classes.task} key={item.id}>
            {/* <button className={classes.button}>
                <span className={classes.icon}><DragIcon /></span>
            </button> */}
            <h2>{item.task}</h2>
            <p>{item.status}</p>
            </Card>)}
        </ul>
    );
};

export default TaskList; 