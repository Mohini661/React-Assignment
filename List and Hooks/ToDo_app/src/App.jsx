import { useState } from "react";
import Title from "./Components/Title";
import ToDoList from "./Components/ToDoList";
import ToDoContextProvider, { toDoContext } from "./Store/Context";

function App() {
  return (
    <div className=" bg-slate-200 text-center h-screen w-full">
      <div className="bg-blue-500 max-w-7xl h-full m-auto p-6">
        <div className="flex flex-col bg-blue-950 h-full rounded-lg">
          <ToDoContextProvider>
            <Title></Title>
            <ToDoList></ToDoList>
          </ToDoContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
