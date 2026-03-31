import React, { useState } from "react";
import _ from "lodash";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";

const Question = (props) => {
  const { data, index } = props;
  const [isPreviewImage, setIsPreviewImage] = useState(false);

  if (_.isEmpty(data)) {
    return <></>;
  }

  const handleHandleCheckbox = (event, aId, qId) => {
    // console.log("check: ", event.target.checked);
    // console.log("data props: ", aId, qId);
    props.handleCheckBox(aId, qId);
  };

  return (
    <>
      {data.image ? (
        <div className="q-image">
          <img
            style={{ cursor: "pointer" }}
            src={`data:image/jpeg;base64,${data.image}`}
            onClick={() => setIsPreviewImage(true)}
          />
          {isPreviewImage === true && (
            <Lightbox
              open={isPreviewImage}
              plugins={[Captions]}
              close={() => setIsPreviewImage(false)}
              slides={[{ src: `data:image/jpeg;base64,${data.image}` }]}
            ></Lightbox>
          )}
        </div>
      ) : (
        <div className="q-image"></div>
      )}

      <div className="question">
        Question {index + 1}: {data.questionDescription}
      </div>

      <div className="answer">
        {data.answers.map((a, index) => {
          return (
            <div key={`answer-${index}`} className="a-child">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={a.isSelected}
                  onChange={(event) =>
                    handleHandleCheckbox(event, a.id, data.questionId)
                  }
                />
                <label className="form-check-label">{a.description}</label>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Question;
