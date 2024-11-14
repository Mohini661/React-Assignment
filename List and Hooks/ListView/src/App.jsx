import { useState } from "react";

function App() {
  const tasks = [
    { id: 1, title: "Use Array .map" },
    { id: 2, title: "Not a For loop" },
    { id: 3, title: "Give each item a unique key" },
    { id: 4, title: "Avoid using array index as a key" },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="bg-lime-300 flex justify-center items-center flex-col p-5 m-10 w-1/2">
        <h1 className=" text-green-800 text-3xl font-semibold p-2">
          The "React Way" to render List
        </h1>
        <ul className="text-lg font-medium text-green-800">
          {tasks.map((task) => (
            // Use the `task.id` as the unique key for each item
            <li className="list-disc bg-white m-2 p-2 w-full" key={task.id}>
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
