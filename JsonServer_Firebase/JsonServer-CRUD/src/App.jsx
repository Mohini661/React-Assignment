import { useEffect, useState } from "react";
import DisplayDetails from "./components/DisplayDetails";
import UserContextProvider from "./context/context";
import UserForm from "./components/UserForm";

function App() {
  return (
    <UserContextProvider>
      <UserForm />
      {/* <DisplayDetails /> */}
    </UserContextProvider>
  );
}

export default App;
