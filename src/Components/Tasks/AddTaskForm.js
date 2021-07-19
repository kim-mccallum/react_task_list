import { useState } from "react";
import Modal from "../Modal/Modal";

import Button from "../UI/Button/Button";
import styles from './AddTaskForm.module.css';

const AddTaskForm = props => {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);
  
    const taskInputChangeHandler = (event) => {
      if (event.target.value.trim().length > 0) {
        setIsValid(true);
      }
      setEnteredValue(event.target.value);
    };
  
    const formSubmitHandler = (event) => {
      event.preventDefault();
      if (enteredValue.trim().length === 0) {
        setIsValid(false);
        return;
      }
      console.log(enteredValue)
      props.onAddTask(enteredValue);
    };

    return (
        <Modal>
            {/* <button onClick={props.onClose}>Close</button> */}
            
            <form onSubmit={formSubmitHandler}>
            <div
                className={`${styles["form-control"]} ${!isValid && styles.invalid}`}
            >
                <label>New Task Item</label>
                <input type="text" onChange={taskInputChangeHandler} />
            </div>
            <Button onClick={props.onClose} className='test'>Cancel</Button>
            <Button type="submit">Add Task</Button>
            </form>
        </Modal>
    );
};

export default AddTaskForm;