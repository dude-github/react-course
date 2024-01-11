import "./App.css";
import Card from "./components/Card";

const myObj = {
  name: "Sagar Borkade",
  age: 23,
  address: {
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
  },
};
myObj;

let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  return (
    <>
      <h1 className="text-3xl bg-green-500 p-3 rounded-md">
        Vite with Tailwind
      </h1>
      <br />
      <Card username="Sagar" post="Software Engineer" myArr={newArr} />
      <br />
      <Card username="Thor" post="Electrical Engineer" city={"UK"} />
      <br />
      <Card post="Scientist" city={"US"} />
    </>
  );
}

export default App;
