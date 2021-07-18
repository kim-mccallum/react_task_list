import React from 'react';
import Modal from '../UI/Modal/Modal';

import classes from "./Menu.module.css";

const Menu = props => {
    return (
        <Modal onCloseMenu={props.onHideMenu}>
            <h2>MENU</h2>
            <button className={classes.button} onClick={props.onHideMenu}>HIDE MENU</button>
        </Modal>
    )
};

export default Menu;