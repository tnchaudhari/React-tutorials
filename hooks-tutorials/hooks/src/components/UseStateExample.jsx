import { useState } from "react";
import style from "./UseStateExample.module.css";


//useState is a React Hook, which creates an "state variable". Which help us to track state in components and updates the user interface when state changes.
function UseStateExample() {
  const [count, setCount] = useState(0);
  return (
    <div className={style.card}>
      <h1>Counter</h1>
      <div>
        <h3>Count is: {count}</h3>
        <button className={style.btn} onClick={() => setCount((count) => count + 1)}>+</button>
        <button onClick={() => setCount((count) => count - 1)}>-</button>
      </div>
    </div>
  );
}


export default UseStateExample;