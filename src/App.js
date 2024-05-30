import React, { useState } from "react";
import "./App.css";
import Question from "./components/Question";
import data from "./data/questions.json";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = (answer) => {
    setFormData({ ...formData, ...answer });
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="App">
      {currentQuestion < data.length ? (
        <Question data={data[currentQuestion]} onNext={handleNext} />
      ) : (
        <div className="completion-message">
          Thank you for completing the form!
          <br />
          Enjoy shopping with us
        </div>
      )}
    </div>
  );
};

export default App;
