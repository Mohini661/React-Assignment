import React, { useContext, useEffect, useRef, useState } from "react";
import DisplayDetails from "./DisplayDetails";
import { UserContext } from "../context/context";
import UserData from "./UserData";

const UserForm = () => {
  const userid = useRef();
  const username = useRef();
  const password = useRef();
  const email = useRef();
  const phone = useRef();
  const [changeUser, setChangeUser] = useState([]);
  const { getData, users } = useContext(UserContext);

  const addUser = (e) => {
    e.preventDefault();

    if (userid.current.value === "") {
      fetch("http://localhost:3000/users", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.current.value,
          password: password.current.value,
          email: email.current.value,
          phone: phone.current.value,
        }),
      });
    } else {
      fetch(`http://localhost:3000/users/${userid.current.value}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.current.value,
          password: password.current.value,
          email: email.current.value,
          phone: phone.current.value,
        }),
      });
    }

    username.current.value = "";
    password.current.value = "";
    email.current.value = "";
    phone.current.value = "";
  };

  useEffect(() => {
    getData();
  }, [addUser]);

  const updateUser = (id) => {
    fetch(`http://localhost:3000/users/${id}`)
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        userid.current.value = result.id;
        username.current.value = result.username;
        password.current.value = result.password;
        email.current.value = result.email;
        phone.current.value = result.phone;
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className=" col-3 mx-auto card mt-2 ">
          <h1 className="text-center">User Form</h1>
          <hr />
          <form onSubmit={addUser}>
            <input type="hidden" ref={userid} name="" id="" />
            <div className="form-group mb-2">
              <label htmlFor="uname">Username:</label>
              <input
                type="text"
                name="uname"
                ref={username}
                className="form-control"
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="pass">Password:</label>
              <input
                type="text"
                name="pass"
                ref={password}
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                name="email"
                ref={email}
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                name="phone"
                ref={phone}
                className="form-control"
                placeholder="Enter your phone"
              />
            </div>
            <button className="btn btn-success">Submit</button>
          </form>
        </div>
        <div className="col-9 card mx-auto mt-2 ">
          <h1 className="mx-auto">Display User Details</h1>
          <hr />
          <table className="table">
            <thead className="table-primary">
              <th>ID</th>
              <th>Username</th>
              <th>Password</th>
              <th>Email</th>
              <th>Phone</th>
              {/* <th>Age</th> */}
              {/* <th>Birth date</th> */}
            </thead>
            <tbody>
              {users.map((user) => (
                <UserData key={user.id} user={user} updateUser={updateUser} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
