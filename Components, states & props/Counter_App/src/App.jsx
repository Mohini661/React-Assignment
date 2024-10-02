import "./App.css";
import Title from "./Components/Title";
import Counter from "./Components/Counter";
function App() {
  return (
    <div className="flex flex-col justify-center items-center bg-red-200 h-screen">
      <div className=" text-5xl font-bold">
        <Title></Title>
      </div>
      <div className="counter">
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
