import React from "react";
import AddUserinfor from "./AddUserinfor.js";
import DisplayInfo from "./DisplayInfo.js";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "Hoi Dan It", age: 30 },
      { id: 2, name: "Eric", age: 36 },
      { id: 3, name: "HarryPhamDev", age: 10 },
      { id: 4, name: "Hoi Dan It", age: 30 },
    ],
  };

  handleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [...this.state.listUsers, userObj],
    });
  };

  handleDeleteUser = (userId) => {
    let listUserClone = [...this.state.listUsers];
    listUserClone = listUserClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUserClone,
    });
  };

  // JSX

  render() {
    const myAge = 50;
    const myArray = ["ab", "c", "d"];

    const test = { name: "Eric", age: 16 };

    return (
      <div>
        {JSON.stringify(test)}

        <AddUserinfor handleAddNewUser={this.handleAddNewUser} />
        <br />

        <br />

        <DisplayInfo
          listUsers={this.state.listUsers}
          handleDeleteUser={this.handleDeleteUser}
        />
      </div>
    );
  }
}

export default MyComponent;
