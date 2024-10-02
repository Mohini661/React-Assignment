import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
const Item = ({ name }) => {
  return (
    <div className="flex justify-center items-center font-bold text-xl mb-4  w-[70%] gap-4">
      <div className="flex items-center text-white bg-purple-600 w-full p-3 rounded-md">
        {name}
      </div>
      <div className="text-white p-3">
        <RiDeleteBin6Line />
      </div>
      <div className="text-white">
        <FaRegEdit />
      </div>
    </div>
  );
};
export default Item;
