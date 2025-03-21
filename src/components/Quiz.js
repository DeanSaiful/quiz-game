import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import scienceQuestions from "./data/Science";
import mathQuestions from "./data/Math";
import historyQuestions from "./data/History";
import ResultPopup from "./ResultPopup";
import scienceGif from "../assets/science.png"; // Import category images
import mathGif from "../assets/math.png";
import historyGif from "../assets/history.png";

function Quiz() {
  const { category } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [popupMessage, setPopupMessage] = useState("");
  const [countdown, setCountdown] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Fisher-Yates Shuffle Algorithm
  function shuffleArray(array) {
    let shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Select category-specific questions & image
  let data, categoryImage;
  if (category === "science") {
    data = scienceQuestions;
    categoryImage = scienceGif;
  } else if (category === "math") {
    data = mathQuestions;
    categoryImage = mathGif;
  } else if (category === "history") {
    data = historyQuestions;
    categoryImage = historyGif;
  } else {
    data = [];
    categoryImage = "";
  }

  useEffect(() => {
    if (data.length > 0) {
      const shuffledQuestions = shuffleArray(data);
      setQuestions(shuffledQuestions);
      setCurrentQuestion(shuffledQuestions[0]);
    }
  }, [category]);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
    const isCorrect = answer === currentQuestion.correct;

    setPopupMessage(isCorrect ? "✅ Correct!" : "❌ Wrong!");

    let count = 3;
    setCountdown(count);
    const interval = setInterval(() => {
      count -= 1;
      setCountdown(count);
      if (count === 0) {
        clearInterval(interval);
        setPopupMessage("");
        setCountdown(null);
        setSelectedAnswer(null);
        setCurrentQuestion(questions[Math.floor(Math.random() * questions.length)]);
      }
    }, 1000);
  };

  if (!currentQuestion) return <p>Loading questions...</p>;

  return (
    <div className="flex flex-col items-center justify-center h-screen px-4 bg-gray-800 text-white text-center">
      {/* Top Navbar with Back Button */}
      <div className="fixed top-0 left-0 w-[120px] h-12 bg-gray-900 flex items-center justify-center shadow-md">
        <button
          onClick={() => navigate("/categories")}
          className="text-white font-bold"
        >
          ← Back
        </button>
      </div>

      {/* Display Category-Specific Image/GIF */}
      {categoryImage && (
        <img
          src={categoryImage}
          alt={`${category} theme`}
          className="w-64 h-40 object-scale-down rounded-lg mb-4"
        />
      )}

      <h2 className="text-2xl font-bold mb-4 mt-4">{currentQuestion.question}</h2>
      <div className="w-full max-w-md space-y-2">
        {currentQuestion.options.map((option) => {
          let buttonClass = "bg-blue-600 hover:bg-blue-800 text-white";
          if (selectedAnswer) {
            if (option === selectedAnswer) {
              buttonClass = option === currentQuestion.correct ? "bg-green-500" : "bg-red-500";
            } else {
              buttonClass = "bg-gray-600";
            }
          }

          return (
            <button
              key={option}
              onClick={() => handleAnswerClick(option)}
              disabled={selectedAnswer !== null}
              className={`block w-full py-2 px-4 rounded text-lg ${buttonClass}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {/* Bottom Positioned Popup */}
      {popupMessage && <ResultPopup message={popupMessage} countdown={countdown} />}
    </div>
  );
}

export default Quiz;
