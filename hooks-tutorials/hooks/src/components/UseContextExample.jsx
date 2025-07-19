
// useContext is a React Hook that allows us to access the data from any component without explicitly passing it down through props at every level. OR useContext is used to manage the Global data in React App.

import { createContext } from "react";

// Created a AppContext here.
export const AppContext = createContext();

// Here we define the properties that we need to share between the components.
const ContextProvider = (prop) => {
  const phone = "+1 123456789";
  const name = "Tanmay";

  return (
    <AppContext.Provider value={{ phone, name }}>
      {prop.children}
    </AppContext.Provider>
  );
}

export default ContextProvider;