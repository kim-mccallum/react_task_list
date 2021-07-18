import Modal from "../Modal/Modal";

const AddTaskForm = props => {
    return (
        <Modal>
            <h2>Surprise!</h2>
            <button onClick={props.onClose}>Close</button>
        </Modal>
    );
};

export default AddTaskForm;