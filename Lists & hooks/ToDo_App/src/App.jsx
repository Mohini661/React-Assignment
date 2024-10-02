import { useState } from "react";
import Title from "./Components/Title";
import ToDoList from "./Components/ToDoList";

function App() {
  const [toDoList, setToDoList] = useState([]);

  const addButtonHandle = (name) => {
    const newArray = [...toDoList, name];
    setToDoList(newArray);
  };

  return (
    <div className=" bg-slate-200 text-center h-screen w-full">
      <div className="bg-blue-500 max-w-7xl h-full m-auto p-6">
        <div className="flex flex-col bg-blue-950 h-full rounded-lg">
          <Title></Title>
          <ToDoList
            ToDoList={toDoList}
            onButtonClick={addButtonHandle}
          ></ToDoList>
        </div>
      </div>
    </div>
  );
}

export default App;
