import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    // Prevent the page from refreshing
    e.preventDefault();
    setUser({ username, password });
    console.log(e);
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        style={{ color: "white", padding: "1rem", fontSize: "x-large" }}
      />{" "}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{ color: "white", padding: "1rem", fontSize: "x-large" }}
      />
      <button
        onClick={handleSubmit}
        style={{ padding: "1rem", fontSize: "x-large" }}
      >
        Submit
      </button>
    </div>
  );
};

export default Login;
