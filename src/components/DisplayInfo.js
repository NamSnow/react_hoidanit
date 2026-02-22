import React, { Component } from "react";

export class DisplayInfo extends React.Component {
  render() {
    const { listUsers } = this.props;

    return (
      <div>
        {listUsers.map((item, index) => {
          return (
            <div key={item.id}>
              <div>My name is {item.name}</div>
              <div>My age is {item.age}</div>
            </div>
          );
        })}

        {/* <div>
          <div>My name is {name}</div>
          <div>My age is {age}</div>
        </div>
        <div>
          <div>My name is {name}</div>
          <div>My age is {age}</div>
        </div>
        <div>
          <div>My name is {name}</div>
          <div>My age is {age}</div>
        </div> */}
      </div>
    );
  }
}

export default DisplayInfo;
