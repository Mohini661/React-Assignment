import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { decreseCount, increseCount } from "./features/counter/counterSlice";
import { counterSlice } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(increseCount());
  };
  // console.log(count);

  return (
    <div className="bg-gray-300 w-full h-screen flex flex-col justify-center items-center ">
      <h1 className="font-bold text-4xl mb-3">Counter using Redux</h1>
      <h2 className="text-4xl font-semibold mb-3 ">Counter: {count}</h2>
      <div className="flex gap-3">
        <button className="bg-green-600 p-2 rounded-md" onClick={increment}>
          Increment
        </button>
        <button
          className="bg-red-600 p-2 rounded-md"
          onClick={() => dispatch(decreseCount())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
