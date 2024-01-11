import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) return <h1>Not Logged In</h1>;
  return (
    <div>
      <h1>Profile : {user.username}</h1>
      <h1>Password : {user.password}</h1>
      <h3>More Components</h3>
    </div>
  );
};

export default Profile;
