import React from 'react';
import Modal from '../UI/Modal/Modal';

import classes from "./Menu.module.css";

const Menu = props => {
    return (
        <Modal onCloseMenu={props.onHideMenu}>
            <h2>MENU</h2>
            <p>this will eventually have links to login/logout or add a new task...</p>
            <button className={classes.button} onClick={props.onHideMenu}>HIDE MENU</button>
        </Modal>
    )
};

export default Menu;