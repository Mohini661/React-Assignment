import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useContext } from "react";
import { toDoContext } from "../Store/Context";
const Item = ({ name }) => {
  const { deleteButtonHandle } = useContext(toDoContext);
  return (
    <div className="flex justify-center items-center font-bold text-xl mb-4  w-[70%] gap-4">
      <div className="flex items-center text-white bg-purple-600 w-full p-3 rounded-md">
        {name}
      </div>
      <button
        className="text-white p-3"
        onClick={() => deleteButtonHandle(name)}
      >
        <RiDeleteBin6Line />
      </button>
      <button className="text-white">
        <FaRegEdit />
      </button>
    </div>
  );
};
export default Item;
