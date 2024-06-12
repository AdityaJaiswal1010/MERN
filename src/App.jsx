//run project command - npm run dev

import { useState } from "react"; // Only import what you need
import PropTypes from "prop-types"; // For prop types validation

function App() {
  const [todos, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym from 7-9",
      completed: false
    },
    {
      title: "Study DSA",
      description: "Study DSA from 9-10", // Corrected typo
      completed: true
    },
    {
      title: "Study DSA",
      description: "Study DSA from 9-10", // Corrected typo
      completed: true
    },
  ]);

  function addTodo() {
    setTodos([
      ...todos,
      {
        title: "New Todo",
        description: "Description of new todo",
        completed: false // Ensure consistency with initial state
      }
    ]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          title={todo.title}
          description={todo.description}
        />
      ))}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

// Define the expected types of the props for the Todo component
Todo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default App;
