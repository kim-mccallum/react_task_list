import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./DragAndDropList.css";

// The list:
const TODOS = [
  {
    id: "1",
    name: "Feed the Boots",
    thumb: "/images/check.png",
  },
  {
    id: "2",
    name: "Feed the Boots more treats",
    thumb: "/images/star.png",
  },
  {
    id: "3",
    name: "Buy the Boots more toys",
    thumb: "/images/star.png",
  },
  {
    id: "4",
    name: "Stretch",
    thumb: "/images/check.png",
  },
  {
    id: "5",
    name: "Stretch some more",
    thumb: "/images/star.png",
  },
];

const DragAndDropList = (props) => {
  const [toDoItems, updateToDoItems] = useState(TODOS);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(toDoItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateToDoItems(items);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="characters">
        {(provided) => (
          <ul
            className="items"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {toDoItems.map(({ id, name, thumb }, index) => {
              return (
                <Draggable key={id} draggableId={id} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <div className="items-thumb">
                        <img src={thumb} alt={`${name} Thumb`} />
                      </div>
                      <p>{name}</p>
                    </li>
                  )}
                </Draggable>
              );
            })}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragAndDropList;
