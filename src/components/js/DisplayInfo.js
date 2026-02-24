import React, { Component, useState } from "react";
import "../scss/DisplayInfo.scss";
import logo from "./../../logo.svg";

// export class DisplayInfo extends React.Component {
//   // constructor(props) {
//   //   console.log("constructor(props)");
//   //   super(props);
//   //   // babel compiler
//   //   this.state = {
//   //     isShowListUser: true,
//   //   };
//   // }

//   // state = {
//   //   isShowListUser: true,
//   // };

//   componentDidMount() {
//     console.log("componentDidMount");

//     setTimeout(() => {
//       document.title = "TodoList";
//     }, 3000);
//   }

//   componentDidUpdate(prevProps, prevState, snapshot) {
//     console.log("componentDidUpdate", this.props, prevProps);

//     if (this.props.listUsers !== prevProps.listUsers) {
//       if (this.props.listUsers.length === 5) {
//         alert("5 users");
//       }
//     }
//   }

//   // handleShowHide = () => {
//   //   this.setState({
//   //     isShowListUser: !this.state.isShowListUser,
//   //   });
//   // };

//   render() {
//     console.log("Render");
//     const { listUsers } = this.props;
//     // console.log(listUsers);

//     return (
//       <div className="display-info-container">
//         {/* <img src={logo} /> */}

//         {/* <div>
//           <span
//             style={{ cursor: "pointer" }}
//             onClick={() => {
//               this.handleShowHide();
//             }}
//           >
//             {this.state.isShowListUser === true ? "Hide" : "Show"} list users:
//           </span>
//         </div> */}

//         {true && (
//           <>
//             {listUsers.map((item, index) => {
//               //   console.log(item);

//               return (
//                 <div key={item.id} className={item.age < 18 ? "green" : "red"}>
//                   <div>
//                     <div>My name is {item.name}</div>
//                     <div>My age is {item.age}</div>
//                   </div>

//                   <div>
//                     <button
//                       onClick={() => this.props.handleDeleteUser(item.id)}
//                     >
//                       Delete
//                     </button>
//                   </div>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfo = (props) => {
  const { listUsers } = props;

  const [isShowHideListUser, setIsShowHideListUser] = useState(true);

  // this.state = {
  //   isShowHideListUser: true,
  // };

  const handleShowHideListUser = () => {
    setIsShowHideListUser(!isShowHideListUser);
  };

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
