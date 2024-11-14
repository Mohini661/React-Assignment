import { useContext, useRef, useState } from "react";
import Item from "./Item";
import { toDoContext } from "../Store/Context";

const ToDoList = () => {
  const { toDoList, addItemHandle } = useContext(toDoContext);

  const nameChange = useRef();
  const addButtonHandle = (e) => {
    e.preventDefault();
    addItemHandle(nameChange.current.value);
    nameChange.current.value = "";
  };

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center mt-5 mb-4 ">
        {toDoList.map((item) => (
          <Item name={item} key={item}></Item>
        ))}
      </div>
      <form onSubmit={addButtonHandle}>
        <div className="flex m-auto bg-purple-600 w-[60%] p-1 rounded-md ">
          <input
            type="text"
            className="bg-blue-950 w-[90%] m-auto p-3 text-center text-xl outline-none text-white"
            placeholder="Add something to your list"
            ref={nameChange}
          />
          <button className="text-white text-xl p-2 ">Add</button>
        </div>
        <div>
          <button className="bg-white p-2 rounded-md mt-8">Delete list</button>
        </div>
      </form>
    </div>
  );
};
export default ToDoList;
