import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { putUpdateQuizAdmin } from "../../../../services/apiServices";
import _ from "lodash";
import Select from "react-select";

const ModaiUpdateQuizAdmin = (props) => {
  const { show, setShow, dataUpdate } = props;

  const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
  ];

  const handleClose = () => {
    setShow(false);
    setName("");
    setDescription("");
    setType("");
    setImage("");

    // props.resetUpdateData();
  };

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    // console.log("run effect", dataUpdate);

    if (!_.isEmpty(dataUpdate)) {
      // update state
      setName(dataUpdate.name);
      setDescription(dataUpdate.description);
      setType({
        value: dataUpdate.difficulty,
        label: dataUpdate.difficulty,
      });
      setImage("");
      if (dataUpdate.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
      }
    }
  }, [dataUpdate]);

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    } else {
      setPreviewImage("");
    }
  };

  const handleSubmitCreateUser = async () => {
    // validate

    // if () {
    //   toast.error("Invalid Email");
    //   return;
    // }

    let data = await putUpdateQuizAdmin(
      dataUpdate.id,
      description,
      name,
      type?.value,
      image,
    );

    console.log("data update", data);

    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await props.fetchListQuiz();
      // props.setCurrentPage(1);
      // await props.fetchListUsersWithPaginate(props.currentPage);
    }

    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  console.log(dataUpdate);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update QUIZS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Description</label>
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Type</label>
              <Select
                options={options}
                placeholder={"Quiz type..."}
                value={type}
                onChange={setType}
              />
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="labelUpload">
                <FcPlus /> Upload File Image
              </label>
              <input
                type="file"
                className="form-control"
                hidden
                id="labelUpload"
                onChange={(event) => handleUploadImage(event)}
              />
            </div>

            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModaiUpdateQuizAdmin;
