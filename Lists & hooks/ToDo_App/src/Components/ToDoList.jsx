import { useState } from "react";
import Item from "./Item";

const ToDoList = ({ ToDoList, onButtonClick }) => {
  const [name, setName] = useState("");
  const nameChnageHandle = (e) => {
    setName(e.target.value);
  };
  const addButtonHandle = () => {
    onButtonClick(name);
    setName("");
  };
  console.log(name);

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center mt-5 mb-4 ">
        {ToDoList.map((item) => (
          <Item name={item} key={item}></Item>
        ))}
      </div>
      <div className="flex m-auto bg-purple-600 w-[60%] p-1 rounded-md ">
        <input
          type="text"
          className="bg-blue-950 w-[90%] m-auto p-3 text-center text-xl outline-none text-white"
          placeholder="Add something to your list"
          onChange={nameChnageHandle}
          value={name}
        />
        <button className="text-white text-xl p-2 " onClick={addButtonHandle}>
          Add
        </button>
      </div>
    </div>
  );
};
export default ToDoList;
