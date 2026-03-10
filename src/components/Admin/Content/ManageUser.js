import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";
import {
  getAllUsers,
  getUserWithPaginate,
} from "../../../services/apiServices";
import { useEffect } from "react";
import ModaiUpdateUser from "./ModaiUpdateUser";
import ModaiViewUser from "./ModaiViewUser";
import ModalDeleteUser from "./ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
  const LIMIT_USER = 3;
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [dataUpdate, setDataUpdate] = useState([]);
  const [dataDelete, setDataDelete] = useState([]);

  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    // fetchListUsers();
    fetchListUsersWithPaginate(1);
  }, []);

  const fetchListUsers = async () => {
    let res = await getAllUsers();
    // console.log(res);
    if (res.EC === 0) {
      setListUsers(res.DT);
    }
  };

  const fetchListUsersWithPaginate = async (page) => {
    let res = await getUserWithPaginate(page, LIMIT_USER);
    // console.log(res);
    if (res.EC === 0) {
      console.log("res.DT", res.DT.users);
      setListUsers(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };

  const handleClickBtnUpdateUser = (user) => {
    setShowModalUpdateUser(true);
    setDataUpdate(user);
  };

  const handleClickBtnViewUser = (user) => {
    setShowModalViewUser(true);
    setDataUpdate(user);
  };

  const handleClickBtnDeleteUser = (user) => {
    setShowModalDeleteUser(true);
    setDataDelete(user);
  };

  const resetUpdateData = () => {
    setDataUpdate({});
  };

  return (
    <div className="manager-user-container">
      <div className="title">Manage User</div>

      <div className="users-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus /> Add new users
          </button>
        </div>

        <div className="table-users-container">
          {/* <TableUser
            listUsers={listUsers}
            handleClickBtnUpdateUser={handleClickBtnUpdateUser}
            handleClickBtnViewUser={handleClickBtnViewUser}
            handleClickBtnDeleteUser={handleClickBtnDeleteUser}
          /> */}

          <TableUserPaginate
            listUsers={listUsers}
            handleClickBtnUpdateUser={handleClickBtnUpdateUser}
            handleClickBtnViewUser={handleClickBtnViewUser}
            handleClickBtnDeleteUser={handleClickBtnDeleteUser}
            fetchListUsersWithPaginate={fetchListUsersWithPaginate}
            pageCount={pageCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>

        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <ModaiUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUpdate={dataUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

        <ModaiViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dataUpdate={dataUpdate}
        />

        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataDelete={dataDelete}
          fetchListUsers={fetchListUsers}
          fetchListUsersWithPaginate={fetchListUsersWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ManageUser;
