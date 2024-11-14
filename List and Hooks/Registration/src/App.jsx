import { useState } from "react";
// import "./App.css";
import LoginForm from "./Components/RegForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center mt-48">
      <LoginForm />
    </div>
  );
}

export default App;
