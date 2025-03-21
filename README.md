# 🎯 React Quiz Game  

[🚀 Live Demo](https://deansaiful.github.io/quiz-game/)  

## 📌 Project Summary  

This **React-based Quiz App** allows users to choose from different quiz categories (**Science, Math, History**) and answer randomly shuffled questions. It provides instant feedback with a pop-up result and smooth transitions between questions.  

---

## 🚀 Key Features  

- ✅ **Category Selection** – Choose between Science, Math, and History.  
- ✅ **Dynamic Question Loading** – Loads category-specific questions from separate files inside the `data/` folder.  
- ✅ **Randomized Questions** – Uses the **Fisher-Yates Shuffle** to randomize questions on each reload.  
- ✅ **Answer Highlighting** – Selected answers turn **green if correct** and **red if incorrect**.  
- ✅ **Result Pop-up** – Displays ✅ **Correct!** or ❌ **Wrong!** for 3 seconds before the next question appears.  
- ✅ **Category-Specific Images/GIFs** – Each quiz category features a unique image or GIF before the first question.  
- ✅ **Navigation System** – Includes a **Back button** in a fixed navbar (120px width).  
- ✅ **Fully Responsive UI** – Built with **Tailwind CSS** for a seamless mobile-friendly experience.  

---

## 🔧 How It Works  

1. The user lands on **Home.js**, clicks "Start Quiz," and is directed to **Categories.js**.  
2. The user selects a **category (Science, Math, History)** → **Quiz.js** loads the category-specific questions.  
3. A **GIF/image** related to the selected category appears before the first question.  
4. The user selects an answer → The **button turns green/red**, and a **result popup** appears for 3 seconds.  
5. After the result popup disappears, the **next question** appears randomly.  
6. The user can exit the quiz anytime using the **Back button** in the navbar.  

---

## 🛠 Installation & Setup  

1. **Clone the Repository:**  
   ```bash
   git clone https://github.com/DeanSaiful/quiz-game.git
   cd quiz-game
2. **Install Dependencies:**
   ```bash
   npm install
3. *Run the App Locally:**
   ```bash
   npm start
Open http://localhost:3000 in your browser.

---

# License
This project is open-source and available under the MIT License.
