import React from 'react';

import DragAndDropList from '../Tasks/DragAndDropList';
// import TaskList from '../Tasks/TaskList';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  let content = (
    <p style={{ textAlign: 'center' }}>No tasks found. Lucky you! Or maybe add one?</p>
  );

  if (props.toDoList.length > 0) {
    content = (
      <DragAndDropList toDoList={props.toDoList} onDeleteTask={props.onDeleteTask}/>
    );
  }
  return (
    <Card className={classes.home}>
      <h1>Task List</h1>
      {content}      
    </Card>
  );
};

export default Home;
