import { useEffect, useState } from "react";

function AppTime() {
  const [time, setTime] = useState(new Date());

  //useEffect use only when you want to start a timer (with setInterval) after the component appears, and then stop the timer when the component disappears.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);
  return <p>This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
}

export default AppTime;