import React, { useEffect, useState } from "react";
import { getAllQuizForAdmin } from "../../../../services/apiServices";

const TableQuiz = () => {
  const [listQuiz, setListQuiz] = useState([]);

  useEffect(() => {
    fetchQuiz();
  }, []);

  const fetchQuiz = async () => {
    let res = await getAllQuizForAdmin();
    if (res && res.EC === 0) {
      setListQuiz(res.DT);
    }
    console.log(res);
  };

  return (
    <>
      <div>List Quizzes</div>

      <table class="table table-hover table-bordered my-2">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Type</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listQuiz &&
            listQuiz.map((item, index) => {
              return (
                <tr key={`table-quiz-${index}`}>
                  <th scope="row">1</th>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.difficulty}</td>
                  <td className="d-flex gap-4">
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default TableQuiz;
