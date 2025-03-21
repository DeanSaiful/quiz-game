import { useNavigate } from "react-router-dom";
import quizImg from "../assets/quiz.png";

function Categories() {
  const navigate = useNavigate();
  const categories = ["Science", "Math", "History"];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      {/* Top Navbar with Back Button */}
      <div className="fixed top-0 left-0 w-[120px] h-12 bg-gray-900 flex items-center justify-center shadow-md">
        <button
          onClick={() => navigate("/")}
          className="text-white font-bold"
        >
          ← Back
        </button>
      </div>

      <img
          src={quizImg}
          alt="quiz logo"
          className="h-65 w-40 object-scale-down rounded-lg"
      />
      <h2 className="text-2xl font-bold mb-6 mt-16">Select a Quiz Category</h2>
      <div className="space-y-4 flex flex-col">
        {categories.map((category) => (
          <button 
            key={category} 
            onClick={() => navigate(`/quiz/${category.toLowerCase()}`)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-14 rounded"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Categories;
