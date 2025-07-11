import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import './App.css';
import { useState } from "react";
import { ToDoItemsContext } from "./store/todo-items-store";

function App() {
  const [toDoItems, setToDoItems] = useState([]);

  const addNewItem = (name, date) => {
    setToDoItems((currValue) => [
      ...currValue, { name: name, date: date },
    ]);
  }

  const deleteItem = (todoName) => {
    const newToDoItem = toDoItems.filter(item => item.name != todoName);
    setToDoItems(newToDoItem);
  }

  return <center className="todo-container">
    <ToDoItemsContext.Provider value={{
      toDoItems,
      addNewItem,
      deleteItem,
    }}>
      <AppName />
      <AddToDo />
      <WelcomeMessage></WelcomeMessage>
      <ToDoItems></ToDoItems>
    </ToDoItemsContext.Provider>
  </center>
}

export default App
