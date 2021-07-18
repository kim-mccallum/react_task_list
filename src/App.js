import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AddTaskForm from "./components/Tasks/AddTaskForm";

// The list:
const TODOS = [
  {
    id: "1",
    name: "Feed the Boots",
    status: 'complete',
    thumb: "/images/check.png",
  },
  {
    id: "2",
    name: "Feed the Boots more treats",
    status: 'in-progress',
    thumb: "/images/star.png",
  },
  {
    id: "3",
    name: "Buy the Boots more toys",
    status: 'in-progress',
    thumb: "/images/star.png",
  },
  {
    id: "4",
    name: "Stretch",
    status: 'complete',
    thumb: "/images/check.png",
  },
  {
    id: "5",
    name: "Stretch some more",
    status: 'in-progress',
    thumb: "/images/star.png",
  },
];

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [tasks, setTasks] = useState(TODOS);
  const [addItemShown, setAddItemShown] = useState(false);

  const showAddItemHandler = () => {
    setAddItemShown(true);
  };

  const hideAddItemHandler = () => {
    setAddItemShown(false);
  };

  //prevent infinite loop by putting the state update into useEffect
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []); //an empty array of dependencies means they won't change and then this only runs once

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  //This isn't properly triggering a rerender - why not? 
  const addTaskHandler = (newTask) => {
    //use prevState and spread to add new task
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.unshift({ name: newTask, status: 'in-progress', id: Math.random().toString() });
      return updatedTasks;
    });
  };

  const deleteTaskHandler = (taskId) => {
    console.log(`deleting task with id: ${taskId}`)
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.filter(task => task.id !== taskId);
      return updatedTasks;
    });
  }


  return (
    <React.Fragment>
      {addItemShown && <AddTaskForm onAddTask={addTaskHandler} onClose={hideAddItemHandler}/>}
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} onAddItem={showAddItemHandler}/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} toDoList={tasks} onDeleteTask={deleteTaskHandler}/>}
      </main>
    </React.Fragment>
  );
}

export default App;
