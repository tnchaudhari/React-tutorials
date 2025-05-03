function AppTime() {
  let date = new Date();
  return <p>This is the current time: {date.toLocaleDateString()} - {date.toLocaleTimeString()}</p>
}

export default AppTime;