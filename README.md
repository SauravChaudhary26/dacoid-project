# 📝 Dacoid Project

## 📌 Project Overview

This **Interactive Quiz Platform** is a fully client-side quiz application built using **React with Vite** and **Material UI**. The app provides multiple-choice and integer-type questions, instant feedback, progress tracking, and the ability to reattempt quizzes.

### ✨ Features

-  **Start Screen** before beginning the quiz.
-  **Multiple-Choice & Integer-Type Questions** with instant feedback.
-  **Timer-Based Quizzes** (30 seconds per question).
-  **Answer Highlighting** (Green for correct, Red for incorrect).
-  **Scoreboard & Quiz Attempt History** stored using **IndexedDB**.
-  **Reattempt Button** on the result page.
-  **Dark Mode** using Material UI's ThemeProvider.

---

## 🚀 Getting Started

### 🛠 Prerequisites

Ensure you have the following installed on your system:

-  [Node.js (v16+)](https://nodejs.org/)
-  [Git](https://git-scm.com/)
-  A package manager (**npm** or **yarn**)

### 👥 Installation & Setup

1. **Clone the Repository**

```bash
git clone https://github.com/SauravChaudhary26/dacoid-project.git
```

2. **Navigate to the Project Folder**

```bash
cd dacoid-project
```

3. **Install Dependencies**

```bash
npm install
```

4. **Run the Application**

```bash
npm run dev
```

This will start a development server, and you can access the app at:

```
http://localhost:5173
```

---

## 📂 Project Structure

```
quiz-app/
├── src/
│   ├── components/
│   │   ├── Quiz.jsx       # Main quiz logic
│   │   ├── Timer.jsx      # Countdown timer
│   │   ├── Scoreboard.jsx # Display quiz score
│   │   ├── History.jsx    # Quiz attempt history
│   ├── data/
│   │   ├── quizData.js    # Sample quiz questions
│   ├── utils/
│   │   ├── indexedDB.js   # Handles IndexedDB storage
│   ├── App.jsx            # Root component
│   ├── main.jsx           # App entry point
│   ├── index.css          # Global styles
├── public/
│   ├── index.html         # HTML entry point
├── package.json           # Project dependencies
├── README.md              # Documentation
```

---

## 🛠 Built With

-  **React with Vite** – Frontend framework & bundler
-  **Material UI** – UI components and styling
-  **IndexedDB** – Storing attempt history

---

## 💡 Features in Detail

### ✅ Start Quiz Screen

Before beginning, users see a **welcome screen** with a **Start Quiz** button.

### ✅ Multiple-Choice & Integer-Type Questions

-  MCQs are displayed with selectable **buttons**.
-  Integer-type questions use a **number input field**.
-  **Auto focus on integer input** for quick response.

### ✅ Instant Feedback

-  Correct answer **highlights green**.
-  Incorrect answer **highlights red**.
-  Integer input **border turns green or red** depending on correctness.

### ✅ Timer-Based Quizzes

-  Users get **30 seconds per question**.
-  The timer stops as soon as an answer is selected.

### ✅ Scoreboard & History

-  Final **score is displayed** at the end.
-  Quiz history is **saved using IndexedDB**.
-  Users can **reattempt the quiz**.

---

## ❓ FAQ

### 1️⃣ Why is there no backend?

This project is designed as a **frontend-only** application using **IndexedDB** to store quiz history locally in the browser.

### 2️⃣ How do I add new quiz questions?

Edit `src/data/quizData.js` and add new questions to the array.

### 3️⃣ How can I change the timer duration?

Modify the `duration` prop in `src/components/Timer.jsx` (default is **30 seconds**).

---

## 💬 Need Help?

If you find any issues or have questions, feel free to **open an issue** or **contribute** to the project! or email me at sauravchaudhary2609@gmail.com
