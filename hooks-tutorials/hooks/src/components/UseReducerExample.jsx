import { useReducer } from "react";

// UseReduer is similar to useState, But instead of providing state and setter function. It provides state and dispatch function.
// It accept two arguments: Reducer function and Initial state. Returns Current state and Dispatch method. 
function UseReducerExample() {
  const initialState = { count: 0 };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      case 'INPUT':
        return { count: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increase</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrease</button>
      <br />
      <input type="number" value={state.count} onChange={(e) => dispatch({ type: 'INPUT', payload: Number(e.target.value) })} />
    </>
  );
}

export default UseReducerExample;
