import React from "react";
import Userinfor from "./Userinfor";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  // JSX

  render() {
    const myAge = 50;
    const myArray = ["ab", "c", "d"];

    return (
      <div>
        <Userinfor />
        <br />
        <DisplayInfo name="Hoi Dan IT" age="266" />

        <hr />

        <DisplayInfo name="Pham Nam" myArray={myArray} />
      </div>
    );
  }
}

export default MyComponent;
