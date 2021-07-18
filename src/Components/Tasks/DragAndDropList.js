import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Button from "../UI/Button/Button";
import "./DragAndDropList.css";


const DragAndDropList = (props) => {
  const [toDoItems, updateToDoItems] = useState(props.toDoList);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(toDoItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateToDoItems(items);
  };

  const deleteHandler = (id) => {
    props.onDeleteTask(id);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <ul
            className="items"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {toDoItems.map(({ id, name }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index} >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <p>{name}</p>
                      <Button onClick={() => deleteHandler(id)}>Delete</Button>
                    </li>
                  )}
                  
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul> 
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragAndDropList;
