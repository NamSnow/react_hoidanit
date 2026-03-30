import React, { useState } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
import {
  postCreateNewQuiz,
  getAllQuizForAdmin,
} from "../../../../services/apiServices";
import { toast } from "react-toastify";
import TableQuiz from "./TableQuiz";
import Accordion from "react-bootstrap/Accordion";
import ModaiUpdateQuizAdmin from "./ModaiUpdateQuizAdmin";
import ModalDeleteQuizAdmin from "./ModalDeleteQuizAdmin";
import QuizQA from "./QuizQA";
import AssignQuiz from "./AssignQuiz";

const ManageQuiz = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("EASY");
  const [image, setImage] = useState(null);
  const [showModalUpdateQuiz, setShowModalUpdateQuiz] = useState(false);
  const [showModalDeleteQuiz, setShowModalDeleteQuiz] = useState(false);
  const [dataUpdate, setDataUpdate] = useState([]);
  const [dataDelete, setDataDelete] = useState([]);
  const [listQuiz, setListQuiz] = useState([]);

  const handleShowUpdate = (item) => {
    setDataUpdate(item);
    setShowModalUpdateQuiz(true);
  };

  const handleShowDelete = (item) => {
    setDataDelete(item);
    setShowModalDeleteQuiz(true);
  };

  const fetchListQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res.EC === 0) {
      setListQuiz(res.DT);
    }
  };

  const options = [
    { value: "EASY", label: "EASY" },
    { value: "MEDIUM", label: "MEDIUM" },
    { value: "HARD", label: "HARD" },
  ];

  const handleChangeFile = (e) => {
    if (e.target && e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmitQuiz = async () => {
    // validate
    if (!name || !description) {
      toast.error("Name/Description is not required");
    }

    let res = await postCreateNewQuiz(description, name, type?.value, image);
    console.log(res);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName("");
      setDescription("");
      setImage(null);
      setType(null);
    } else {
      toast.error(res.EM);
    }
  };

  return (
    <div className="quiz-container">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header>Manage Quizzes</Accordion.Header>
          <Accordion.Body>
            <div className="add-new">
              <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add new Quiz</legend>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label htmlFor="floatingInput">Description</label>
                </div>

                <div className="my-3">
                  <Select
                    options={options}
                    placeholder={"Quiz type..."}
                    defaultValue={type}
                    onChange={setType}
                  />
                </div>

                <div className="more-actions form-group">
                  <label className="mb-1">Upload Image</label>
                  <input
                    type="file"
                    className="form-control"
                    onChange={(e) => handleChangeFile(e)}
                  />
                </div>
                <button
                  onClick={() => handleSubmitQuiz()}
                  className="btn btn-warning mt-3"
                >
                  SAVE
                </button>
              </fieldset>
            </div>
            <div className="list-detail">
              <TableQuiz
                handleShowUpdate={handleShowUpdate}
                handleShowDelete={handleShowDelete}
                listQuiz={listQuiz}
                setListQuiz={setListQuiz}
              />
            </div>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>Update Q/A Quizzes</Accordion.Header>
          <Accordion.Body>
            <QuizQA />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>Assign to Users</Accordion.Header>
          <Accordion.Body>
            <AssignQuiz />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <ModaiUpdateQuizAdmin
        show={showModalUpdateQuiz}
        setShow={setShowModalUpdateQuiz}
        dataUpdate={dataUpdate}
        fetchListQuiz={fetchListQuiz}
      />

      <ModalDeleteQuizAdmin
        show={showModalDeleteQuiz}
        setShow={setShowModalDeleteQuiz}
        dataDelete={dataDelete}
        fetchListQuiz={fetchListQuiz}
      />
    </div>
  );
};

export default ManageQuiz;
