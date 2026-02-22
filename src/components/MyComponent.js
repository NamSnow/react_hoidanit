import React from "react";
import AddUserinfor from "./AddUserinfor";
import DisplayInfo from "./DisplayInfo";

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

  // JSX

  render() {
    const myAge = 50;
    const myArray = ["ab", "c", "d"];

    return (
      <div>
        <AddUserinfor handleAddNewUser={this.handleAddNewUser} />
        <br />

        <br />

        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
