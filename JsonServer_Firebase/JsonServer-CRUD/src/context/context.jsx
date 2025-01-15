import { createContext, useState } from "react";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  const getData = () => {
    fetch("http://localhost:3000/users")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => setUsers(result));
  };
  //   console.log(users);

  return (
    <UserContext.Provider value={{ users, getData }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
