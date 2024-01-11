import { useState } from "react";
import "./App.css";

function App() {
  // let count = 15;

  // const addValue = () => {
  //   count = count + 1;
  //   console.log(count);
  // };

  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);

    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () =>
    counter === 0 ? console.log("You reached 0") : setCounter(counter - 1);

  return (
    <>
      <h1>React Course With Sagar {counter}</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={removeValue}>Remove Value</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App;
