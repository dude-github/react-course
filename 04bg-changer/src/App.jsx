import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200 bg-black"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("red")}
            style={{ backgroundColor: "red", color: "white" }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("blue")}
            style={{ backgroundColor: "blue", color: "white" }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("green")}
            style={{ backgroundColor: "green", color: "white" }}
          >
            Green
          </button>
        </div>
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-2 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            onClick={() => setColor("olive")}
            style={{ backgroundColor: "olive", color: "white" }}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
