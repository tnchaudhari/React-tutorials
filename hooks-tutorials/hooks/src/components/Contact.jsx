import { useContext } from "react";
import { AppContext } from "./UseContextExample";

const Contact = () => {

  const { phone } = useContext(AppContext);
  return (
    <div>
      <h1>Contact</h1>
      <h3>Phone: {phone}</h3>
    </div>
  )
}

export default Contact;