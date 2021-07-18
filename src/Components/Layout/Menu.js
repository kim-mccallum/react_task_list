import React from 'react';

import classes from "./Menu.module.css";

const Menu = props => {
    return <div>
        <h2>MENU</h2>
        <button className={classes.button} onClick={props.onHideMenu}>HIDE MENU</button>
        </div>
};

export default Menu;