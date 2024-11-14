import React from "react";

const LoginForm = () => {
  return (
    // <div className="flex items-center p-5">
    <form className=" flex flex-col justify-center items-center w-[400px] h-[460px] border-2 shadow-md  rounded-sm p-5">
      <h2 className="mb-8 mt-2 font-bold text-blue-600  text-center text-lg">
        Registration Form
      </h2>
      <input
        type="text"
        placeholder="Full Name"
        className=" outline-none p-2 border mb-5 w-full rounded-md hover:border-blue-600"
      />
      <input
        type="email"
        placeholder="Email"
        className=" outline-none p-2 border mb-5 w-full rounded-md hover:border-blue-600"
      />
      <input
        type="password"
        placeholder="Password"
        className="outline-none p-2 border mb-5 w-full rounded-md hover:border-blue-600"
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="outline-none p-2 border mb-5 w-full rounded-md hover:border-blue-600"
      />
      <button
        type="submit"
        className="bg-blue-600 w-full p-2 mb-5 rounded-md text-white font-bold"
      >
        Register
      </button>
    </form>
    // </div>
  );
};

export default LoginForm;
