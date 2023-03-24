import React, { useState } from "react";

function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;