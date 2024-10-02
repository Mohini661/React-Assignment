import { useState } from "react";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleButton = () => {
    setLoggedIn(!loggedIn);
  };

  return (
    <div className="flex justify-center items-center bg-black w-screen h-screen">
      <div className="flex flex-col w-1/4 h-1/2  bg-gray-300 rounded-lg ">
        <div className=" bg-blue-400 p-2 m-3 max-w-full rounded-md">
          <label htmlFor="nav" className="text-white font-bold">
            Navigation
          </label>
          {loggedIn ? (
            <button
              onClick={handleButton}
              className="bg-red-500 float-right px-4 py-0.1 rounded-md font-bold"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleButton}
              className="bg-gray-300 float-right px-4 py-0.1 rounded-md font-bold"
            >
              Login
            </button>
          )}
        </div>
        <div className=" flex  justify-center items-center bg-gray-200 m-3  max-w-full h-svh rounded-md">
          {loggedIn ? (
            <h1 className=" content-center font-bold">Private View</h1>
          ) : (
            <h1 className=" content-center font-bold">Public View</h1>
          )}
        </div>
        <div className="footer bg-blue-400 m-3 p-2 max-w-full rounded-md">
          <h1 className="text-center text-white font-bold">Footer</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
