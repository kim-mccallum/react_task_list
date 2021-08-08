import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Button from "../UI/Button/Button";
// import "./DragAndDropList.css";
//move to list
import AddTaskForm from '../Tasks/AddTaskForm';
import AddTaskButton from '../Tasks/AddTaskButton';

import classes from './DragAndDropList.module.css'

// The list:
const TODOS = [
  {
    id: "1",
    name: "Feed the Boots",
    complete: true
  },
  {
    id: "2",
    name: "Feed the Boots more treats",
    complete: false
  },
  {
    id: "3",
    name: "Buy the Boots more toys",
    complete: false
  },
  {
    id: "4",
    name: "Stretch",
    complete: true
  },
  {
    id: "5",
    name: "Stretch some more",
    complete: false
  },
];

const DragAndDropList = (props) => {

    // move all this logic to the list
    const [tasks, setTasks] = useState(TODOS);
    const [addItemShown, setAddItemShown] = useState(false);
  
    const showAddItemHandler = () => {
      setAddItemShown(true);
    };
  
    const hideAddItemHandler = () => {
      setAddItemShown(false);
    };
  
    const addTaskHandler = (newTask) => {
      //use prevState and spread to add new task
      setTasks(prevTasks => {
        const updatedTasks = [...prevTasks];
        updatedTasks.unshift({ name: newTask, complete: false, id: Math.random().toString() });
        return updatedTasks;
      });
      setAddItemShown(false);
    };
  
    const deleteTaskHandler = (taskId) => {
      //looks correct
      console.log(`deleting task with id: ${taskId}`)
      setTasks(prevTasks => {
        const updatedTasks = prevTasks.filter(task => task.id !== taskId);
        return updatedTasks;
      });
    }

    const completeTaskHandler = (taskId) => {
      setTasks(prevTasks => {
        // find the task with the id and toggle the value
        const index = prevTasks.findIndex(item => item.id === taskId);
        // Create a copy
        const updatedTasks = [...prevTasks]
        // Update the value
        updatedTasks[index] = {...updatedTasks[index], complete: !updatedTasks[index].complete}
        return updatedTasks
      })
    }

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setTasks(items);
  };


  let content = (
    <p style={{ textAlign: 'center' }}>No tasks found. Lucky you! Or maybe add one?</p>
  );

  if (tasks.length > 0) {
    content = (
      <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul
            className={classes.items}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {tasks.map(({ id, name, complete }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index} >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <p className={complete ? classes.complete : ''}>{name}</p>
                      <Button onClick={() => completeTaskHandler(id)}>Complete</Button>
                      <Button onClick={() => deleteTaskHandler(id)}>Delete</Button>
                    </li>
                  )}
                  
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul> 
        )}
      </Droppable>
    </DragDropContext>
    );
  }

  return (
    <React.Fragment>
      <AddTaskButton onAddItem={showAddItemHandler}/>
      {/* <Button onClick={showAddItemHandler}>Add Item</Button> */}
      {addItemShown && <AddTaskForm onAddTask={addTaskHandler} onClose={hideAddItemHandler}/>}
      {content}
    </React.Fragment>
  );
};

export default DragAndDropList;
