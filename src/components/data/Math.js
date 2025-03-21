const mathQuestions = [
    {
      question: "What is the value of π (pi) rounded to two decimal places?",
      options: ["3.12", "3.14", "3.16"],
      correct: "3.14",
    },
    {
      question: "What is the square root of 144?",
      options: ["10", "12", "14"],
      correct: "12",
    },
    {
      question: "What is 7 × 8?",
      options: ["54", "56", "58"],
      correct: "56",
    },
    {
      question: "What is 15% of 200?",
      options: ["25", "30", "35"],
      correct: "30",
    },
    {
      question: "What is the perimeter of a square with side length 5?",
      options: ["10", "20", "25"],
      correct: "20",
    },
    {
      question: "What is 9²?",
      options: ["72", "81", "90"],
      correct: "81",
    },
    {
      question: "What is the result of 100 ÷ 4?",
      options: ["20", "25", "30"],
      correct: "25",
    },
    {
      question: "What is the next prime number after 7?",
      options: ["9", "11", "13"],
      correct: "11",
    },
    {
      question: "What is the sum of the angles in a triangle?",
      options: ["90°", "180°", "360°"],
      correct: "180°",
    },
    {
      question: "What is 5! (5 factorial)?",
      options: ["60", "120", "150"],
      correct: "120",
    },
    {
      question: "What is 2³?",
      options: ["6", "8", "10"],
      correct: "8",
    },
    {
      question: "What is 3/4 as a decimal?",
      options: ["0.5", "0.75", "1.25"],
      correct: "0.75",
    },
    {
      question: "What is the median of 3, 5, 7, 9, 11?",
      options: ["5", "7", "9"],
      correct: "7",
    },
    {
      question: "What is the area of a circle with a radius of 3? (Use π ≈ 3.14)",
      options: ["9.42", "18.84", "28.26"],
      correct: "28.26",
    },
    {
      question: "What is the greatest common divisor (GCD) of 36 and 48?",
      options: ["6", "12", "18"],
      correct: "12",
    },
    {
      question: "What is 25 × 4?",
      options: ["50", "75", "100"],
      correct: "100",
    },
    {
      question: "What is 2/5 as a percentage?",
      options: ["20%", "40%", "50%"],
      correct: "40%",
    },
    {
      question: "What is 6³?",
      options: ["36", "216", "256"],
      correct: "216",
    },
    {
      question: "What is 0.25 × 0.4?",
      options: ["0.1", "0.15", "0.2"],
      correct: "0.1",
    },
    {
      question: "What is 7 + (6 × 5) - 3?",
      options: ["34", "37", "40"],
      correct: "34",
    },
    {
      question: "What is the volume of a cube with side length 3?",
      options: ["9", "27", "81"],
      correct: "27",
    },
    {
      question: "If a car travels 60 miles in 2 hours, what is its speed?",
      options: ["20 mph", "30 mph", "40 mph"],
      correct: "30 mph",
    },
    {
      question: "What is the mode of the numbers 2, 4, 4, 6, 8, 8, 8?",
      options: ["4", "6", "8"],
      correct: "8",
    },
    {
      question: "What is 10²?",
      options: ["20", "50", "100"],
      correct: "100",
    },
    {
      question: "What is the lowest common multiple (LCM) of 4 and 6?",
      options: ["12", "24", "36"],
      correct: "12",
    },
    {
      question: "What is 7/8 as a decimal?",
      options: ["0.625", "0.75", "0.875"],
      correct: "0.875",
    },
    {
      question: "What is the value of x if 2x + 3 = 11?",
      options: ["3", "4", "5"],
      correct: "4",
    },
    {
      question: "If a rectangle has a length of 10 and width of 4, what is its area?",
      options: ["20", "30", "40"],
      correct: "40",
    },
    {
      question: "What is the probability of rolling a 6 on a fair die?",
      options: ["1/3", "1/6", "1/12"],
      correct: "1/6",
    },
    {
      question: "If a triangle has sides 3, 4, and 5, what type of triangle is it?",
      options: ["Scalene", "Isosceles", "Right"],
      correct: "Right",
    },
    {
      question: "What is 11 × 11?",
      options: ["111", "121", "131"],
      correct: "121",
    },
    {
      question: "What is the value of 4³?",
      options: ["16", "64", "81"],
      correct: "64",
    },
    {
      question: "What is 3/8 as a percentage?",
      options: ["37.5%", "42.5%", "50%"],
      correct: "37.5%",
    },
    {
      question: "What is 24 ÷ 6?",
      options: ["2", "4", "6"],
      correct: "4",
    },
    {
      question: "If x = 5 and y = 2, what is xy?",
      options: ["5", "7", "10"],
      correct: "10",
    },
    {
      question: "What is 45% of 80?",
      options: ["32", "36", "40"],
      correct: "36",
    },
    {
      question: "What is the sum of the interior angles of a quadrilateral?",
      options: ["180°", "270°", "360°"],
      correct: "360°",
    },
    {
      question: "What is 14 × 3?",
      options: ["32", "42", "52"],
      correct: "42",
    },
    {
      question: "What is 2⁵?",
      options: ["16", "32", "64"],
      correct: "32",
    },
    {
      question: "What is the slope of a horizontal line?",
      options: ["0", "1", "Undefined"],
      correct: "0",
    },
    {
      question: "What is the circumference of a circle with a diameter of 10? (Use π ≈ 3.14)",
      options: ["10.14", "31.4", "15.7"],
      correct: "31.4",
    },
    {
      question: "If 5x = 20, what is x?",
      options: ["2", "4", "5"],
      correct: "4",
    },
    {
      question: "What is the area of a triangle with base 6 and height 10?",
      options: ["30", "40", "50"],
      correct: "30",
    },
    {
      question: "What is 8 × 9?",
      options: ["64", "72", "80"],
      correct: "72",
    },
  ];
  
  export default mathQuestions;
  