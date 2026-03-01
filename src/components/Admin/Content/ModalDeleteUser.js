import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDeleteUser = (props) => {
  const { show, setShow, dataDelete } = props;

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmitDeleteUser = () => {
    alert("me");
  };

  console.log("Dataupdate: ", dataDelete);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Notification</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this
          {dataDelete?.role && (
            <>
              <b> {dataDelete.role}:</b>
            </>
          )}
          {dataDelete?.email && (
            <>
              {" email= "}
              <b>{dataDelete.email}</b>
            </>
          )}
          {dataDelete?.username && (
            <>
              {", username= "}
              <b>{dataDelete.username}</b>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitDeleteUser()}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
