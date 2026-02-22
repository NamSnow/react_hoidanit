import React, { Component } from "react";
import PropTypes from "prop-types";

class Userinfor extends React.Component {
  state = {
    name: "",
    address: "Hoi Dan It",
    age: "",
  };

  handleClick(event) {
    console.log("Click me");
    // console.log("random ", this.state.name);

    this.setState({
      name: "Eric",
    });
  }

  handleOnChangeInput = (event) => {
    // console.log(event, event.target.value);

    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();

    this.props.handleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
    });
  };

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
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeInput(event)}
          />

          <input
            type="text"
            value={this.state.age}
            onChange={(event) => this.handleOnChangeAge(event)}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Userinfor;
