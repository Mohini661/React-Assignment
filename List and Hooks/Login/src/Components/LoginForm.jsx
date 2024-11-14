import React from "react";

const LoginForm = () => {
  return (
    // <div className="flex items-center p-5">
    <form className=" flex flex-col justify-center items-center w-[350px] h-96 border-2 shadow-md  rounded-sm p-5">
      <h2 className="mb-8 mt-2 font-bold text-blue-600  text-center text-lg">
        Login to my account
      </h2>
      <input
        type="text"
        placeholder="Username"
        className=" outline-none p-2 border mb-5 w-full rounded-md hover:border-blue-600"
      />
      <input
        type="password"
        placeholder="Password"
        className="outline-none p-2 border mb-5 w-full rounded-md hover:border-blue-600"
      />
      <button
        type="submit"
        className="bg-blue-600 w-full p-2 mb-5 rounded-md text-white font-bold"
      >
        Login
      </button>
      <p className="text-center mb-5">Forgot your Password?</p>
      <p>Create a New Account</p>
    </form>
    // </div>
  );
};

export default LoginForm;
