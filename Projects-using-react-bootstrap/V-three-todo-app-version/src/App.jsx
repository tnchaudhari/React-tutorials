import AppName from "./components/AppName"
import AddToDo from "./components/AddToDo"
import ToDoItems from "./components/ToDoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import './App.css';
import { useState } from "react";

function App() {
  const [toDoItems, setToDoItems] = useState([]);

  const handleNewItem = (name, date) => {
    const newToDoItem = [...toDoItems, { name: name, date: date }];
    setToDoItems(newToDoItem)
  }

  const handleDeleteItem = (todoName) => {
    const newToDoItem = toDoItems.filter(item => item.name != todoName);
    setToDoItems(newToDoItem);
  }

  return <center className="todo-container">
    <AppName />
    <AddToDo onNewItem={handleNewItem} />
    {toDoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
    <ToDoItems toDoItems={toDoItems} onDeleteClick={handleDeleteItem}></ToDoItems>
  </center>
}

export default App
