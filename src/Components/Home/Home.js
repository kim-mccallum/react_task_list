import React from 'react';

import DragAndDropList from '../Tasks/DragAndDropList';
// import TaskList from '../Tasks/TaskList';
import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Task List</h1>
      {/* <TaskList /> */}
      <DragAndDropList />
    </Card>
  );
};

export default Home;
