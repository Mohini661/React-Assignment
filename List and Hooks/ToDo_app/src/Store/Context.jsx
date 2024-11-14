import { createContext, useState } from "react";

export const toDoContext = createContext(null);

const toDoContextProvider = (props) => {
  const [toDoList, setToDoList] = useState([]);

  const addItemHandle = (name) => {
    const newArray = [...toDoList, name];
    setToDoList(newArray);
  };
  //Delete todo item
  const deleteButtonHandle = (name) => {
    setToDoList(toDoList.filter((ele) => ele !== name));
  };

  //edit todo item
  // const editToDo = (i) => {
  //   const newToDOList = toDoList.filter((ele) => ele === toDoList[i]);
  //   console.log(newToDOList);
  //   setToDoList(newToDOList);
  // };
  return (
    <toDoContext.Provider
      value={{ toDoList, addItemHandle, deleteButtonHandle }}
    >
      {props.children}
    </toDoContext.Provider>
  );
};
export default toDoContextProvider;
