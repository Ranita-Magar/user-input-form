import React, { useState } from "react";
import "./Question.css";

const Question = ({ data, onNext }) => {
  const [answer, setAnswer] = useState("");
  const [customInput, setCustomInput] = useState("");
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setAnswer(e.target.value);
    if (e.target.value !== "Custom") {
      setCustomInput(""); // Clear custom input if not custom option
    }
    if (e.target.value !== "Yes") {
      setFile(null); // Clear file input if not yes
    }
  };

  const handleCustomInputChange = (e) => {
    setCustomInput(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAnswer = answer === "Custom" ? customInput : answer;
    onNext({ [data.question]: finalAnswer, ...(file && { file }) });
  };

  return (
    <div className="question-container">
      <div className="question">
        <h2>{data.question}</h2>
        <div className="note">{data.note}</div>
        <form onSubmit={handleSubmit}>
          {data.options.map((option, index) => (
            <div key={index} className="option">
              <label>
                <input
                  type={data.type}
                  name="answer"
                  value={option}
                  checked={answer === option}
                  onChange={handleChange}
                  required
                />
                {option}
              </label>
            </div>
          ))}
          {answer === "Custom" && data.customInput && (
            <div className="custom-input">
              <input
                type="text"
                placeholder="Enter custom input"
                value={customInput}
                onChange={handleCustomInputChange}
              />
            </div>
          )}
          {answer === "Yes" && data.fileInput && (
            <div className="file-input">
              <input type="file" onChange={handleFileChange} />
            </div>
          )}
          <button type="submit">NEXT</button>
        </form>
      </div>
    </div>
  );
};

export default Question;
