import { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const initialItems = [
    { id: 'item-1', content: 'Item 1' },
    { id: 'item-2', content: 'Item 2' },
    { id: 'item-3', content: 'Item 3' },
];

function First() {
    const [items, setItems] = useState(initialItems);

    const onDragEnd = (result) => {
        const { destination, source } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        const newItems = Array.from(items);
        const [removed] = newItems.splice(source.index, 1);
        newItems.splice(destination.index, 0, removed);

        setItems(newItems);
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable-1">
                {(provided, snapshot) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {items.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                            backgroundColor: snapshot.isDragging ? 'lightblue' : 'white',
                                            ...provided.draggableProps.style,
                                        }}
                                    >
                                        {item.content}
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>

    );
}

export default First;