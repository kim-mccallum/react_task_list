import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AddTaskForm from "./components/Tasks/AddTaskForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [addItemShown, setAddItemShown] = useState(true);

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

  return (
    <React.Fragment>
      {addItemShown && <AddTaskForm onClose={hideAddItemHandler}/>}
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} onAddItem={showAddItemHandler}/>
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
