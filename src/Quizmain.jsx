import { useState } from "react";
import { Link } from "react-router-dom"; // 👈 using Link
import Side from "./components/Side";

function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState({});
  const [remainingQuestions, setRemainingQuestions] = useState(10);
  const [finished, setFinished] = useState(false);

  const questions = [
    {
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

  const handleChange = (e) => {
    const selectedAnswer = e.target.value;

    setUserAnswer((prev) => ({
      ...prev,
      [questionNumber]: selectedAnswer,
    }));

    if (
      questions[questionNumber].correct === selectedAnswer &&
      userAnswer[questionNumber] !== selectedAnswer
    ) {
      setScore((prev) => prev + 1);
    }

    setRemainingQuestions((q) => q - 1);
  };

  const nextQuestion = () => {
    if (questionNumber < questions.length - 1) {
      setQuestionNumber((q) => q + 1);
    } else {
      setFinished(true); // 👈 mark quiz as finished
    }
  };

  return (
    <div className="body">
      <div className="quizBody">
        <Side />
        <div className="question">
          <div className="response">
            <h1>QUIZ</h1>

            {!finished ? (
              <>
                <h2>
                  Question {questionNumber + 1} of {questions.length}
                </h2>
                <h2>{questions[questionNumber].Question}</h2>

                <form id="q1">
                  {questions[questionNumber].ans.map((ans, index) => (
                    <label key={index}>
                      <input
                        type="radio"
                        name={`q${questionNumber}`}
                        value={ans}
                        checked={userAnswer[questionNumber] === ans}
                        onChange={handleChange}
                      />
                      &nbsp; {ans}
                      <br />
                    </label>
                  ))}
                </form>

                <br />
                <button
                  onClick={nextQuestion}
                  disabled={!userAnswer[questionNumber]}>
                  Next
                </button>

                <p>Selected: {userAnswer[questionNumber] || "None"}</p>
                <p>Score: {score}</p>
                <p>Remaining Questions: {remainingQuestions}</p>
              </>
            ) : (
              <>
                <h2>Quiz Finished!</h2>
                <p>
                  Your final score: {score} / {questions.length}
                </p>
                <a href="./greenquiz">Go Home</a> {/* classic HTML link */}
                {/* 👈 simple link to home */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
