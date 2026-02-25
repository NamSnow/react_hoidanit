import React, { useState } from "react";
import AddUserinfor from "./AddUserinfor.js";
import DisplayInfo from "./DisplayInfo.js";

const MyComponent = () => {
  const [listUsers, setListUsers] = useState([
    { id: 1, name: "Hoi Dan It", age: 30 },
    { id: 2, name: "Eric", age: 36 },
    { id: 3, name: "HarryPhamDev", age: 10 },
    { id: 4, name: "Hoi Dan It", age: 30 },
  ]);

  const handleAddNewUser = (userObj) => {
    setListUsers([...listUsers, userObj]);
  };

  const handleDeleteUser = (userId) => {
    let listUserClone = listUsers;
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    setListUsers(listUserClone);
  };
  // JSX

  return (
    <div>
      <AddUserinfor handleAddNewUser={handleAddNewUser} />
      <br />
      <br />
      <DisplayInfo listUsers={listUsers} handleDeleteUser={handleDeleteUser} />
    </div>
  );
};

export default MyComponent;
