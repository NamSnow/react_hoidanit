import React from "react";

class MyComponent extends React.Component {
  // JSX
  state = {
    name: "NameA3",
    address: "Hoi Dan It",
    age: 26,
  };

  handleClick(event) {
    console.log("Click me");
    console.log("random ", this.state.name);

    this.setState({
      name: "Eric",
    });
  }

  render() {
    return (
      <div>
        My name is {this.state.name} and I'm {this.state.age}
        <button
          onClick={(event) => {
            this.handleHover(event);
          }}
        >
          Hover me
        </button>
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default MyComponent;
