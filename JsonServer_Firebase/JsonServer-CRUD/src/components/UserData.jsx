import React from "react";

const UserData = ({ user, updateUser }) => {
  const deleteUser = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: "delete",
    });
  };

  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.password}</td>
      <td>{user.email}</td>
      <td>{user.phone}</td>
      {/* <td>{user.age}</td> */}
      {/* <td>{user.birthDate}</td> */}
      <td>
        <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>
          Delete
        </button>
      </td>
      <td>
        <button className="btn btn-success" onClick={() => updateUser(user.id)}>
          Update
        </button>
      </td>
    </tr>
  );
};

export default UserData;
