import React, { useState } from "react";

const ToDoList = () => {
  const [todo, setTodo] = useState("");
  const [items, setItems] = useState([]);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleClick = () => {
    setItems((val) => {
      return [...val, todo];
    });
    setTodo("");
  };
  return (
    <>
      <h1>TODO LIST</h1>
      <input
        type="text"
        value={todo}
        placeholder="Add task here..."
        onChange={handleChange}
      />
      <button onClick={handleClick}>ADD</button>

      <ol>
        {items.map((item, idx) => {
          return <li key={idx}>{item}</li>;
        })}
      </ol>
    </>
  );
};
export default ToDoList;
