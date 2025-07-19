import { useContext } from "react";
import Contact from "./Contact";
import { AppContext } from "./UseContextExample";

const Profile = () => {
  const { name } = useContext(AppContext);
  return (
    <div>
      <h2>Profile: {name}</h2>
      <Contact />
    </div>
  )
}


export default Profile;