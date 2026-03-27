import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteQuizAdmin } from "../../../../services/apiServices";
import { toast } from "react-toastify";

const ModalDeleteQuizAdmin = (props) => {
  const { show, setShow, dataDelete } = props;

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmitDeleteQuizAdmin = async () => {
    let data = await deleteQuizAdmin(dataDelete.id);

    console.log("data delete", data);

    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await props.fetchListQuiz();
      // props.setCurrentPage(1);
      // await props.fetchListUsersWithPaginate(1);
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  console.log(dataDelete);

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
          {dataDelete?.name && (
            <>
              {" Name = "}
              <b>{dataDelete.name}</b>
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleSubmitDeleteQuizAdmin()}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteQuizAdmin;
