import { Fragment } from "react";
import headerImage from '../../assets/header-img.jpg'; 

import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>TaskLister</h1>
        <button className={classes.button} onClick={props.onShowMenu}>SHOW MENU</button>
      </header>
      <div className={classes['main-image']}>
            <img src={headerImage} alt="A background of books"/>
        </div>
    </Fragment>
  );
};

export default Header;
