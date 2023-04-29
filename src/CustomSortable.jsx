import React, { useState } from "react";
import Button from '@mui/material/Button'

export default function CustomSortable() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' }
  ]);

  const handleDragStart = (event, index) => {
    event.dataTransfer.setData("index", index);
  };

  const handleDragOver = event => {
    event.preventDefault();
  };

  const handleDrop = event => {
    const fromIndex = event.dataTransfer.getData("index");
    const toIndex = event.target.getAttribute("data-index");
    console.log(event.target)
    console.log(fromIndex +" -> "+toIndex)
    const newItems = [...items];
    console.log(newItems)
    const [removed] = newItems.splice(fromIndex, 1);
    console.log([removed])
    newItems.splice(toIndex, 0, removed);
    console.log(newItems)
    setItems(newItems);
  };

  return (
    <div className="App">
      <ul>
        {items.map((item, index) => (
          <>
          <div
          sx={{display:'block',height:'10vh'}}
            key={item.id}
            data-index={index}
            draggable="true"
            onDragStart={event => handleDragStart(event, index)}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <Button data-index={index}>{item.name}</Button>
          </div>
    
          </>
        ))}
      </ul>
    </div>
  );
}
