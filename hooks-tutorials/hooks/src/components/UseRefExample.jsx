import { useEffect, useRef, useState } from "react";


//useRef is a react hook that allows us to create mutable variables, which will not re-render the component when the value get changed. It is also used to access the DOM elements.
function UseRefExample() {
  const [value, setValue] = useState(0);

  const inputEle = useRef();

  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const btnClicked = () => {
    inputEle.current.style.background = "orange";
  }

  return (
    <>
      <h1>Value is: {value}</h1>
      <button onClick={() => { setValue(prev => prev + 1) }}>+1</button>
      <button onClick={() => { setValue(prev => prev - 1) }}>-1</button>
      <h2>{count.current} Times the page got re-render.</h2>

      {/* 2nd Use is to access the DOM element and changes its properties. Such as here onclick we are accessing the input ref and changing it to orange */}
      <input type="text" ref={inputEle} />
      <button onClick={btnClicked}>Click me!</button>
    </>
  );

}

export default UseRefExample;