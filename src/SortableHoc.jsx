import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const SortableItem = SortableElement(({ value }) => (
  <li className="item">{value}</li>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <ul className="list">
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

export default function SortableHoc() {
 const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    const newItems = [...items];
    const [removed] = newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, removed);
    setItems(newItems);
    generateSchema(newItems); // Call function to generate schema with new order
  };

  const generateSchema = (items) => {
    // Generate schema with new order of items
    console.log(items);
  };

  return <SortableList items={items} onSortEnd={onSortEnd} />;
}
