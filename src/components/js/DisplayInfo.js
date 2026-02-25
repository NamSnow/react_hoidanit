import React, { Component, useEffect, useState } from "react";
import "../scss/DisplayInfo.scss";
import logo from "./../../logo.svg";

const DisplayInfo = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setIsShowHideListUser] = useState(true);

  // this.state = {
  //   isShowHideListUser: true,
  // };

  const handleShowHideListUser = () => {
    setIsShowHideListUser(!isShowHideListUser);
  };

  console.log("Call me render");

  useEffect(() => {
    setTimeout(() => {
      if (listUsers.length === 0) {
        alert("You deleted all the users");
      }
    }, 3000);
    console.log("Call me useEffect");
  }, [listUsers]);

  return (
    <div className="display-info-container">
      <div onClick={() => handleShowHideListUser()}>
        {isShowHideListUser ? "Hide" : "Show"} list users
      </div>

      {isShowHideListUser && (
        <>
          {listUsers.map((item, index) => {
            //   console.log(item);

            return (
              <div key={item.id} className={item.age < 18 ? "green" : "red"}>
                <div>
                  <div>My name is {item.name}</div>
                  <div>My age is {item.age}</div>
                </div>

                <div>
                  <button onClick={() => props.handleDeleteUser(item.id)}>
                    Delete
                  </button>
                </div>
                <hr />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default DisplayInfo;
