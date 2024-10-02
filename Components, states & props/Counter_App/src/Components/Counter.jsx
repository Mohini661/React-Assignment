import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);

  const increseCount = () => {
    setCount(count + 1);
  };

  const decreseCount = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-8">
        <span className="text-4xl font-bold">{count}</span>
      </div>
      <div className="flex  gap-3 mt-8 ">
        <button
          className="bg-green-700 px-4 py-2 rounded-md hover:border-2 hover:text-white"
          onClick={increseCount}
        >
          Increment
        </button>
        <button
          className="bg-red-700 px-4 py-2 rounded-md hover:border-2 hover:text-white"
          onClick={decreseCount}
        >
          Decrement
        </button>
      </div>
    </>
  );
};
export default Counter;
