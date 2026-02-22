import React from "react";
import Userinfor from "./Userinfor";
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

  // JSX

  render() {
    const myAge = 50;
    const myArray = ["ab", "c", "d"];

    return (
      <div>
        <Userinfor />
        <br />

        <br />

        <DisplayInfo listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
