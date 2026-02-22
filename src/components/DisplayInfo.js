import React, { Component } from "react";

export class DisplayInfo extends React.Component {
  state = {
    isShowListUser: true,
  };

  handleShowHide = () => {
    this.setState({
      isShowListUser: !this.state.isShowListUser,
    });
  };

  render() {
    const { listUsers } = this.props;
    // console.log(listUsers);

    return (
      <div>
        <div>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowListUser === true ? "Hide" : "Show"} list users:
          </span>
        </div>

        {this.state.isShowListUser && (
          <div>
            {listUsers.map((item, index) => {
              //   console.log(item);

              return (
                <div key={item.id} className={item.age < 18 ? "green" : "red"}>
                  <div>My name is {item.name}</div>
                  <div>My age is {item.age}</div>
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfo;
