import React, { useState, useContext } from "react";
import "./TodoApp.css";
import { useNotificationContext } from "../../util/customHooks";
import { validateInput } from "../../util/validate";

// Create a new context
const TodoContext = React.createContext();

// Custom hook to access the TodoContext
const useTodoContext = () => useContext(TodoContext);

// TodoApp component
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [taskCount, setTaskCount] = useState(0);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  // Function to add a new todo
  const addTodo = (text) => {
    setTodos([...todos, { text, completed: false }]);
    setTaskCount(todos.length + 1);
  };

  // Function to toggle the completion status of a todo
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    let completedCount = 0;

    newTodos[index].completed = !newTodos[index].completed;

    newTodos.forEach((todo) => {
      if (todo.completed) completedCount++;
    });

    setTodos(newTodos);
    setCompletedTasksCount(completedCount);
  };

  // Function to remove a task
  const removeTodo = (index) => {
    let newTodos = [...todos];

    newTodos = newTodos.filter((_, idx) => index !== idx);

    setTodos([...newTodos]);
    setTaskCount(newTodos.length);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        taskCount,
        completedTasksCount,
        addTodo,
        toggleTodo,
        removeTodo,
      }}
    >
      <TodoList />
      <TodoForm />
    </TodoContext.Provider>
  );
};

// TodoList component
const TodoList = () => {
  const { todos, taskCount, completedTasksCount, toggleTodo, removeTodo } =
    useTodoContext();

  const handleDelete = (e, index) => {
    e.stopPropagation();
    removeTodo(index);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {!todos.length ? (
          <p>You don't have any task to accomplish!</p>
        ) : (
          todos.map((todo, index) => (
            <li
              key={index}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => toggleTodo(index)}
            >
              {todo.text}
              <span>
                completed
                <input type="checkbox" name="" id="" checked={todo.completed} />
              </span>
              <button type="button" onClick={(e) => handleDelete(e, index)}>
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
      <div className="taskStatistics">
        <p>
          Total Tasks: <span>{taskCount}</span>
        </p>
        <p>
          Completed Tasks: <span>{completedTasksCount}</span>
        </p>
      </div>
    </div>
  );
};

// TodoForm component
const TodoForm = () => {
  const { addTodo } = useTodoContext();
  const [text, setText] = useState("");

  const { updateNotification } = useNotificationContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { ok, msg } = validateInput(text);
    if (ok === "false") {
      return updateNotification(msg);
    }
    addTodo(text);
    setText("");
    updateNotification("Task added successfully!🥳🥳");
  };

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add your task here"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoApp;
