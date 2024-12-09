import { Link, NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="text-center m-4 fs-4">
      <Link to={"/home"}>Home</Link> | <Link to={"/about"}>About</Link>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
