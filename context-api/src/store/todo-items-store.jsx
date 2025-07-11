import { createContext } from "react";

export const ToDoItemsContext = createContext({
  toDoItems: [],
  addNewItem: () => { },
  deleteItem: () => { },
});