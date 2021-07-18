import { Fragment } from "react";

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>TaskLister1</h1>
        <button className={classes.button} onClick={props.onShowMenu}>SHOW MENU</button>
      </header>
    </Fragment>
  );
};

export default Header;
