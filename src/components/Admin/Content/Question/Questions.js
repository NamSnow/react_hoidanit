import React, { useState } from "react";
import Select from "react-select";
import "./Questions.scss";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaCircleMinus } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

const Questions = () => {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  const [selectedQuiz, setSelectedQuiz] = useState({});

  return (
    <div className="questions-container">
      <div className="title">Manage Questions</div>

      <div className="add-new-question">
        <div className="col-6 form-group">
          <label>Select Quiz</label>
          <Select
            value={selectedQuiz}
            onChange={setSelectedQuiz}
            options={options}
          />
        </div>

        <div className="mt-3">Add questions:</div>

        <div>
          <div className="questions-content">
            <div className="form-floating description">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Description</label>
            </div>
            <div className="group-upload">
              <label className="label-up">Upload Image</label>
              <input type={"file"} hidden />

              <span>0 files is upload</span>
            </div>
            <div className="btn-add">
              <span>
                <BsFillPlusCircleFill className="icon-add" />
              </span>

              <span>
                <FaCircleMinus className="icon-remove" />
              </span>
            </div>

            {/* <div className="answers">
            <input type={"text"} />
          </div> */}
          </div>

          <div className="answers-content">
            <input className="form-check-input iscorrect" type="checkbox" />
            <div className="form-floating answer-name">
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Answers 1</label>
            </div>
            <div className="btn-group">
              <span>
                <CiCirclePlus className="icon-add" />
              </span>

              <span>
                <CiCircleMinus className="icon-remove" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
