import { useState } from "react";
import Side from "./components/Side";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUseranswer] = useState({});
  const [qn, setQn] = useState(10);
  const questions = [
    { Question: "Who discovered penicillin?",
      ans: [
        "Marie Curie",
        "Alexander Fleming",
        "Louis Pasteur",
        "Isaac Newton",
      ],
      correct: "Alexander Fleming",

      Question: "Who discovered penicillin?",
      ans: [
        "Marie Curie",
        "Alexander Fleming",
        "Louis Pasteur",
        "Isaac Newton",
      ],
      correct: "Alexander Fleming",
    },
    {
      Question: "What is the capital of Canada?",
      ans: ["Ottawa", "Songo", "Nassau", "Accra"],
      correct: "Ottawa",
    },
    {
      Question: "Who painted the Mona Lisa?",
      ans: [
        "Leonardo di Caprio",
        "Mahatma Ghandi",
        "Leonardo da Vinci",
        "Pablo Picasso",
      ],
      correct: "Leonardo da Vinci",
    },
    {
      Question: "Who wrote the play “Romeo and Juliet?",
      ans: [
        "Charles Dickens",
        "William Shakespeare",
        "Jane Austen",
        "Mark Twain",
      ],
      correct: "William Shakespeare",
    },
    {
      Question: "Which country is famous for the pyramids?",
      ans: ["Greece", "Mexico", "Egypt", "China"],
      correct: "Egypt",
    },
    {
      Question: "What is the largest mammal in the world?",
      ans: ["African Elephant", "Blue Whale", "Giraffe", "Killer Whale"],
      correct: "Blue Whale",
    },
    {
      Question: 'Which element has the chemical symbol "O"?',
      ans: ["Oxygen", "Osmium", "Ozone", "Opium"],
      correct: "Oxygen",
    },
    {
      Question: "What is the smallest planet in our solar system?",
      ans: ["Mercury", "Mars", "Venus", "Earth"],
      correct: "Mercury",
    },
    {
      Question: "Who invented the telephone?",
      ans: [
        "Nikola Tesla",
        "Thomas Edison",
        "Alexander Graham Bell",
        "Samuel Morse",
      ],
      correct: "Alexander Graham Bell",
    },
    {
      Question: "What is the smallest country in the world by land area?",
      ans: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
      correct: "Vatican City",
    },
  ];

  const handlechange = (e) => {
    const selectedAnswer = e.target.value;

    setUseranswer((prevAnswers) => ({
      ...prevAnswers,
      [questionNumber]: selectedAnswer,
    }));

    if (questions[questionNumber].correct === selectedAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setQn((q) => q - 1);
  };

  const nextquestion = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((q) => q + 1);
    } else {
      window.location.href = "/"; // Redirect to homepage
    }
  };

  return (
    <>
      <div className="body">
        <div className="quizBody">
          <Side />
          <div className="question">
            <div className="response">
              <h1>QUIZ</h1>
              <h2>Question {questionNumber}</h2>
              <h2>{questions[questionNumber].Question}</h2>
              <form id="q1">
                {questions[questionNumber].ans.map((ans, index) => (
                  <label key={index}>
                    <input
                      id={index}
                      type="radio"
                      name="q1"
                      value={ans}
                      checked={userAnswer[questionNumber] === ans}
                      onChange={handlechange}
                    />
                    &nbsp;
                    {ans}
                    <br />
                  </label>
                ))}
              </form>
              <br />
              <button onClick={nextquestion}>Next</button>
              <p>Selected: {userAnswer[questionNumber]}</p>
              <p>Score: {score}</p>
              <p>Total Questions: {qn}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quiz;
