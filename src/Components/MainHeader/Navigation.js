import React from "react";

import Button from "../UI/Button/Button";

import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && (
          <li>
            {/* <button onClick={props.onAddItem}>Add Item</button> */}
            <Button onClick={props.onAddItem}>Add Item</Button>
          </li>
        )}
        {props.isLoggedIn && (
          <li>
            <Button onClick={props.onLogout}>Logout</Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
