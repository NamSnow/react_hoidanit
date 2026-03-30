import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./QuizQA.scss";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaCircleMinus } from "react-icons/fa6";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { LuImagePlus } from "react-icons/lu";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import {
  getAllQuizForAdmin,
  postCreateNewQuestionForQuiz,
  postCreateNewAnswerForQuestion,
} from "../../../../services/apiServices";
import { toast } from "react-toastify";

const QuizQA = () => {
  const initQuestions = [
    {
      id: uuidv4(),
      description: "",
      imageFile: "",
      imageName: "",
      isValidInitQs: false,
      answers: [
        {
          id: uuidv4(),
          description: "",
          isCorrect: false,
          isValidInitAs: false,
        },
      ],
    },
  ];

  const [isValidCheckSelect, setIsValidCheckSelect] = useState(true);
  const [questions, setQuestions] = useState(initQuestions);
  const [isPreviewImage, setIsPreviewImage] = useState(false);
  const [dataImagePreview, setDataImagePreview] = useState({
    title: "",
    src: "",
  });
  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [listQuiz, setListQuiz] = useState([]);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      let newQuiz = res.DT.map((item) => {
        return {
          value: item.id,
          label: `${item.id} - ${item.description}`,
        };
      });
      setListQuiz(newQuiz);
    }
  };

  const handleAddRemoveQuestion = (type, id) => {
    if (type === "ADD") {
      const newQuestion = {
        id: uuidv4(),
        description: "",
        imageFile: "",
        imageName: "",
        answers: [
          {
            id: uuidv4(),
            description: "",
            isCorrect: false,
          },
        ],
      };

      setQuestions([...questions, newQuestion]);
    }

    if (type === "REMOVE") {
      let questionsClone = questions;
      questionsClone = questionsClone.filter((item) => item.id !== id);
      setQuestions(questionsClone);
    }
  };

  const handleAddRemoveAnswer = (type, questionId, answerId) => {
    let questionsClone = _.cloneDeep(questions);

    if (type === "ADD") {
      const newAnswer = {
        id: uuidv4(),
        description: "",
        isCorrect: false,
      };

      let index = questionsClone.findIndex((item) => item.id === questionId);
      questionsClone[index].answers.push(newAnswer);
      setQuestions(questionsClone);
    }

    if (type === "REMOVE") {
      let index = questionsClone.findIndex((item) => item.id === questionId);
      questionsClone[index].answers = questionsClone[index].answers.filter(
        (item) => item.id !== answerId,
      );
      setQuestions(questionsClone);
    }
  };

  const handleOnChangeInputQuestionCheckboxAnswer = (
    type,
    value,
    questionId,
    answerId,
  ) => {
    // lấy 1 questions mới
    let questionsClone = _.cloneDeep(questions);
    let index = questionsClone.findIndex((item) => item.id === questionId);

    // input question
    if (type === "QUESTION" && index > -1) {
      questionsClone[index].description = value;
      questionsClone[index].isValidInitQs = false;
      setQuestions(questionsClone);
    }

    // input answer checkbox
    if (index > -1) {
      questionsClone[index].answers = questionsClone[index].answers.map(
        (answer) => {
          if (answer.id === answerId) {
            if (type === "CHECKBOX") {
              answer.isCorrect = value;
            }

            if (type === "ANSWER") {
              answer.description = value;
              answer.isValidInitAs = false;
            }
          }
          return answer;
        },
      );
      setQuestions(questionsClone);
    }
  };

  const handleOnChangeFileQuestion = (questionId, event) => {
    let questionsClone = _.cloneDeep(questions);

    let index = questionsClone.findIndex((item) => item.id === questionId);
    if (
      index > -1 &&
      event.target &&
      event.target.files &&
      event.target.files[0]
    ) {
      questionsClone[index].imageFile = event.target.files[0];
      questionsClone[index].imageName = event.target.files[0].name;
      setQuestions(questionsClone);
    }
  };

  const handlePreviewImage = (questionId) => {
    let questionsClone = _.cloneDeep(questions);
    let index = questionsClone.findIndex((item) => item.id === questionId);
    if (index > -1) {
      setDataImagePreview({
        src: URL.createObjectURL(questionsClone[index].imageFile),
        title: questionsClone[index].imageName,
      });
      setIsPreviewImage(true);
    }
  };

  const handleSubmitQuestionForQuiz = async () => {
    let questionsClone = _.cloneDeep(questions);
    console.log("questions: ", questions, selectedQuiz);

    // validate select
    if (_.isEmpty(selectedQuiz)) {
      setIsValidCheckSelect(false);
      toast.error("Please choose a Quiz");
      return;
    } else {
      setIsValidCheckSelect(true);
    }

    // validate question
    let isValidQ = true;
    let indexQ1 = 0;
    for (let i = 0; i < questionsClone.length; i++) {
      if (!questionsClone[i].description) {
        questionsClone[i].isValidInitQs = true;
        setQuestions(questionsClone);
        isValidQ = false;
        indexQ1 = i;
        break;
      }
    }

    if (isValidQ === false) {
      toast.error(`Not empty description for Question ${indexQ1 + 1}`);
      return;
    }

    // validate answer
    let isValidAnswer = true;
    let indexQ = 0,
      indexA = 0;
    for (let i = 0; i < questionsClone.length; i++) {
      for (let j = 0; j < questionsClone[i].answers.length; j++) {
        if (!questionsClone[i].answers[j].description) {
          questionsClone[i].answers[j].isValidInitAs = true;
          setQuestions(questionsClone);
          isValidAnswer = false;
          indexA = j;
          break;
        }
      }
      indexQ = i;
      if (isValidAnswer === false) break;
    }

    if (isValidAnswer === false) {
      toast.error(`Not empty Answer ${indexA + 1} at Question ${indexQ + 1}`);
      return;
    }

    // validate data
    for (const question of questions) {
      const q = await postCreateNewQuestionForQuiz(
        +selectedQuiz.value,
        question.description,
        question.imageFile,
      );
      for (const answer of question.answers) {
        await postCreateNewAnswerForQuestion(
          answer.description,
          answer.isCorrect,
          q?.DT?.id,
        );
      }
    }

    toast.success("Create questions and answers success!");
    setQuestions(initQuestions);
    // submit questions
    // await Promise.all(
    //   questions.map(async (question) => {
    //     // submit questions
    //     const q = await postCreateNewQuestionForQuiz(
    //       +selectedQuiz.value,
    //       question.description,
    //       question.imageFile,
    //     );

    //     // submit answer
    //     await Promise.all(
    //       question.answers.map((answer) => {
    //         return postCreateNewAnswerForQuestion(
    //           answer.description,
    //           answer.isCorrect,
    //           q?.DT?.id,
    //         );
    //       }),
    //     );
    //   }),
    // );
  };

  return (
    <div className="questions-container">
      <div className="add-new-question">
        <div className="col-6 form-group">
          <label className="mb-2">Select Quiz</label>
          <Select
            value={selectedQuiz}
            onChange={setSelectedQuiz}
            options={listQuiz}
            menuPortalTarget={document.body}
            styles={{
              menuPortal: (base) => ({ ...base, zIndex: 9999 }),
              control: (base) => ({
                ...base,
                borderColor: isValidCheckSelect ? base.borderColor : "red",
                boxShadow: isValidCheckSelect
                  ? base.boxShadow
                  : "0 0 0 1px red",
                "&:hover": {
                  borderColor: isValidCheckSelect ? base.borderColor : "red",
                },
              }),
            }}
          />
        </div>

        <div className="mt-3 mb-2">Add questions:</div>

        {questions &&
          questions.length > 0 &&
          questions.map((question, index) => {
            return (
              <div key={question.id} className="q-main mb-4">
                <div className="questions-content">
                  <div className="form-floating description">
                    <input
                      type="text"
                      className={`form-control ${question.isValidInitQs === true ? "is-invalid" : ""} `}
                      placeholder="name@example.com"
                      value={question.description}
                      onChange={(event) =>
                        handleOnChangeInputQuestionCheckboxAnswer(
                          "QUESTION",
                          event.target.value,
                          question.id,
                        )
                      }
                    />
                    <label htmlFor="floatingInput">
                      Question {index + 1} 's description
                    </label>
                  </div>
                  <div className="group-upload">
                    <label htmlFor={`${question.id}`}>
                      <LuImagePlus className="label-up" />
                    </label>
                    <input
                      id={`${question.id}`}
                      type={"file"}
                      onChange={(event) =>
                        handleOnChangeFileQuestion(question.id, event)
                      }
                      hidden
                    />

                    <span>
                      {question.imageName ? (
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => handlePreviewImage(question.id)}
                        >
                          {question.imageName}
                        </span>
                      ) : (
                        "0 files is upload"
                      )}
                    </span>
                  </div>
                  <div className="btn-add">
                    <span onClick={() => handleAddRemoveQuestion("ADD", "")}>
                      <BsFillPlusCircleFill className="icon-add" />
                    </span>

                    {questions.length > 1 && (
                      <span
                        onClick={() =>
                          handleAddRemoveQuestion("REMOVE", question.id)
                        }
                      >
                        <FaCircleMinus className="icon-remove" />
                      </span>
                    )}
                  </div>
                </div>

                {question.answers &&
                  question.answers.length > 0 &&
                  question.answers.map((answer, index) => {
                    return (
                      <div key={answer.id} className="answers-content">
                        <input
                          className="form-check-input iscorrect"
                          type="checkbox"
                          checked={answer.isCorrect}
                          onChange={(event) =>
                            handleOnChangeInputQuestionCheckboxAnswer(
                              "CHECKBOX",
                              event.target.checked,
                              question.id,
                              answer.id,
                            )
                          }
                        />
                        <div className="form-floating answer-name">
                          <input
                            value={answer.description}
                            type="text"
                            className={`form-control ${answer.isValidInitAs === true ? "is-invalid" : ""}`}
                            id="floatingInput"
                            placeholder="name@example.com"
                            onChange={(event) =>
                              handleOnChangeInputQuestionCheckboxAnswer(
                                "ANSWER",
                                event.target.value,
                                question.id,
                                answer.id,
                              )
                            }
                          />
                          <label htmlFor="floatingInput">
                            Answers {index + 1}
                          </label>
                        </div>
                        <div className="btn-group">
                          <span
                            onClick={() =>
                              handleAddRemoveAnswer("ADD", question.id, "")
                            }
                          >
                            <CiCirclePlus className="icon-add" />
                          </span>

                          {question.answers.length > 1 && (
                            <span
                              onClick={() =>
                                handleAddRemoveAnswer(
                                  "REMOVE",
                                  question.id,
                                  answer.id,
                                )
                              }
                            >
                              <CiCircleMinus className="icon-remove" />
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        {questions && questions.length > 0 && (
          <div>
            <button
              onClick={() => handleSubmitQuestionForQuiz()}
              className="btn btn-warning"
            >
              Save Questions
            </button>
          </div>
        )}
        {isPreviewImage === true && (
          <Lightbox
            open={isPreviewImage}
            plugins={[Captions]}
            close={() => setIsPreviewImage(false)}
            slides={[dataImagePreview]}
          ></Lightbox>
        )}
      </div>
    </div>
  );
};

export default QuizQA;
