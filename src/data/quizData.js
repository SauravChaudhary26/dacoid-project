const quizData = [
    // Multiple-Choice Questions
    {
      question: "Which planet is closest to the Sun?",
      type: "mcq",
      options: [
        { key: "A", text: "Venus" },
        { key: "B", text: "Mercury" },
        { key: "C", text: "Earth" },
        { key: "D", text: "Mars" },
      ],
      correctAnswer: "B",
    },
    {
      question: "Which data structure organizes items in a First-In, First-Out (FIFO) manner?",
      type: "mcq",
      options: [
        { key: "A", text: "Stack" },
        { key: "B", text: "Queue" },
        { key: "C", text: "Tree" },
        { key: "D", text: "Graph" },
      ],
      correctAnswer: "B",
    },
    {
      question: "Which of the following is primarily used for structuring web pages?",
      type: "mcq",
      options: [
        { key: "A", text: "Python" },
        { key: "B", text: "Java" },
        { key: "C", text: "HTML" },
        { key: "D", text: "C++" },
      ],
      correctAnswer: "C",
    },
    {
      question: "Which chemical symbol stands for Gold?",
      type: "mcq",
      options: [
        { key: "A", text: "Au" },
        { key: "B", text: "Gd" },
        { key: "C", text: "Ag" },
        { key: "D", text: "Pt" },
      ],
      correctAnswer: "A",
    },
    {
      question: "Which of these processes is not typically involved in refining petroleum?",
      type: "mcq",
      options: [
        { key: "A", text: "Fractional distillation" },
        { key: "B", text: "Cracking" },
        { key: "C", text: "Polymerization" },
        { key: "D", text: "Filtration" },
      ],
      correctAnswer: "D",
    },
    // Integer-Type Questions
    {
      question: "What is the value of 12 + 28?",
      type: "integer",
      correctAnswer: 40,
    },
    {
      question: "How many states are there in the United States?",
      type: "integer",
      correctAnswer: 50,
    },
    {
      question: "In which year was the Declaration of Independence signed?",
      type: "integer",
      correctAnswer: 1776,
    },
    {
      question: "What is the value of pi rounded to the nearest integer?",
      type: "integer",
      correctAnswer: 3,
    },
    {
      question: "If a car travels at 60 mph for 2 hours, how many miles does it travel?",
      type: "integer",
      correctAnswer: 120,
    },
  ];
  
  export default quizData;
  