import React, { useEffect, useState } from "react";
import axios from "axios";

const TableUser = (props) => {
  const { listUsers } = props;
  // const listUsers = props.listUsers;

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">USERNAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">ROLE</th>
            {/* <th scope="col">IMAGE</th> */}
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={index}>
                  <th>{item.id}</th>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  {/* <td>
                    <img src={item.image} />
                  </td> */}
                  <td className="d-flex gap-2">
                    <button
                      className="btn btn-secondary"
                      onClick={() => props.handleClickBtnViewUser(item)}
                    >
                      View
                    </button>
                    <button
                      className="btn btn-warning"
                      onClick={() => props.handleClickBtnUpdateUser(item)}
                    >
                      Update
                    </button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length === 0 && (
            <tr>
              <td colSpan={4}>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
