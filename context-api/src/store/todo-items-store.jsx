import { createContext } from "react";
import { useReducer } from "react";

export const ToDoItemsContext = createContext({
  toDoItems: [],
  addNewItem: () => { },
  deleteItem: () => { },
});

const toDoItemsReducer = (currToDoItems, action) => {
  let newToDoItems = currToDoItems;
  if (action.type === "NEW_ITEM") {
    newToDoItems = [...currToDoItems, { name: action.payload.name, date: action.payload.date }];

  } else if (action.type === "DELETE_ITEM") {
    newToDoItems = newToDoItems.filter(item => item.name != action.payload.name);
  }
  return newToDoItems;
}

export const ToDoItemsContextProvider = ({ children }) => {
  // const [toDoItems, setToDoItems] = useState([]);

  //State management using use Reducer
  const [toDoItems, dispatchToDoItems] = useReducer(toDoItemsReducer, []);

  const addNewItem = (name, date) => {
    // setToDoItems((currValue) => [
    //   ...currValue, { name: name, date: date },
    // ]);

    const newToDoItem = {
      type: "NEW_ITEM",
      payload: {
        name,
        date
      }
    }
    dispatchToDoItems(newToDoItem);
  }

  const deleteItem = (todoName) => {
    // const newToDoItem = toDoItems.filter(item => item.name != todoName);
    // setToDoItems(newToDoItem);

    const deleteToDoItem = {
      type: "DELETE_ITEM",
      payload: {
        name: todoName
      }
    }
    dispatchToDoItems(deleteToDoItem);
  }

  return <ToDoItemsContext.Provider value={{
    toDoItems,
    addNewItem,
    deleteItem,
  }}>{children}</ToDoItemsContext.Provider>
}
