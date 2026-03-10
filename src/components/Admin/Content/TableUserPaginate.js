import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
  const { listUsers, pageCount } = props;

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    props.fetchListUsersWithPaginate(+event.selected + 1);
    props.setCurrentPage(+event.selected + 1);
    console.log(`User requested page number ${event.selected}`);
  };

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
                    <button
                      className="btn btn-danger"
                      onClick={() => props.handleClickBtnDeleteUser(item)}
                    >
                      Delete
                    </button>
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

      <div className="d-flex justify-content-center">
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next >"
          previousLabel="< Prev"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
          forcePage={props.currentPage - 1}
        />
      </div>
    </>
  );
};

export default TableUserPaginate;
