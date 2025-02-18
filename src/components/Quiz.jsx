import React, { useState } from "react";
import {
   Box,
   Typography,
   Button,
   Card,
   CardContent,
   Stack,
   TextField,
} from "@mui/material";
import quizData from "../data/quizData";
import Timer from "./Timer";
import Scoreboard from "./Scoreboard";
import History from "./History";
import { saveAttempt } from "../utils/indexedDB";

function Quiz() {
   // State to control the start screen
   const [hasStarted, setHasStarted] = useState(false);

   // Quiz states
   const [currentQuestion, setCurrentQuestion] = useState(0);
   const [selectedOption, setSelectedOption] = useState(null);
   const [integerAnswer, setIntegerAnswer] = useState("");
   const [feedback, setFeedback] = useState(null);
   const [score, setScore] = useState(0);
   const [attempts, setAttempts] = useState([]);
   const [quizFinished, setQuizFinished] = useState(false);
   const [timeOut, setTimeOut] = useState(false);
   const [isTimerActive, setIsTimerActive] = useState(true);

   const question = quizData[currentQuestion];

   // Function to reset quiz state for a reattempt
   const handleRetake = () => {
      setCurrentQuestion(0);
      setSelectedOption(null);
      setIntegerAnswer("");
      setFeedback(null);
      setScore(0);
      setAttempts([]);
      setQuizFinished(false);
      setTimeOut(false);
      setIsTimerActive(true);
   };

   if (!hasStarted) {
      return (
         <Box
            sx={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               minHeight: "100vh",
               backgroundColor: "background.default",
               width: "100vw",
            }}
         >
            <Card
               sx={{
                  width: {
                     xs: "90%",
                     sm: 500,
                  },
                  padding: "20px",
                  borderRadius: "40px",
                  marginTop: {
                     xs: -7,
                  },
               }}
            >
               <CardContent sx={{ textAlign: "center", py: 4 }}>
                  <Typography variant="h4" sx={{ mb: 2 }}>
                     Welcome to the Quiz!
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 4 }}>
                     You will have a mix of multiple-choice and integer-type
                     questions. Click below to start the quiz.
                  </Typography>
                  <Button
                     variant="contained"
                     onClick={() => setHasStarted(true)}
                  >
                     Start Quiz
                  </Button>
               </CardContent>
            </Card>
         </Box>
      );
   }

   if (quizFinished) {
      return (
         <Box sx={{ p: 2, textAlign: "center", width: "100vw" }}>
            <Typography variant="h4" align="center">
               Quiz Finished!
            </Typography>
            <Scoreboard score={score} total={quizData.length} />
            <History />
            <Button variant="contained" sx={{ mt: 2 }} onClick={handleRetake}>
               Reattempt Quiz
            </Button>
         </Box>
      );
   }

   const handleMCQSelect = (optionKey) => {
      if (selectedOption !== null) return;
      setSelectedOption(optionKey);
      setIsTimerActive(false);
      if (optionKey === question.correctAnswer) {
         setFeedback("Correct!");
         setScore((prev) => prev + 1);
      } else {
         setFeedback("Incorrect!");
      }
   };

   const handleIntegerSubmit = () => {
      if (integerAnswer === "") return;
      setIsTimerActive(false);
      const numericAnswer = parseInt(integerAnswer, 10);
      if (numericAnswer === question.correctAnswer) {
         setFeedback("Correct!");
         setScore((prev) => prev + 1);
      } else {
         setFeedback(`Incorrect! Correct answer: ${question.correctAnswer}`);
      }
   };

   const handleNextQuestion = () => {
      let attempt;
      if (question.type === "mcq") {
         attempt = {
            question: question.question,
            selected: selectedOption,
            correct: question.correctAnswer,
            result: selectedOption === question.correctAnswer,
            type: question.type,
         };
      } else if (question.type === "integer") {
         const numericAnswer = parseInt(integerAnswer, 10);
         attempt = {
            question: question.question,
            selected: numericAnswer,
            correct: question.correctAnswer,
            result: numericAnswer === question.correctAnswer,
            type: question.type,
         };
      }

      const newAttempts = [...attempts, attempt];
      setAttempts(newAttempts);

      if (currentQuestion + 1 < quizData.length) {
         setCurrentQuestion((prev) => prev + 1);
         setSelectedOption(null);
         setIntegerAnswer("");
         setFeedback(null);
         setTimeOut(false);
         setIsTimerActive(true);
      } else {
         setQuizFinished(true);
         saveAttempt({ date: new Date(), attempts: newAttempts, score });
      }
   };

   const handleTimeOut = () => {
      if (
         (question.type === "mcq" && !selectedOption) ||
         (question.type === "integer" && integerAnswer === "")
      ) {
         setTimeOut(true);
         setFeedback("Time's up!");
         setIsTimerActive(false);
      }
   };

   return (
      <Box
         sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "background.default",
            width: "100vw",
         }}
      >
         <Card
            sx={{
               width: { xs: "90%", sm: 600 },
               mx: "auto",
               mt: 4,
               padding: "20px",
               borderRadius: "15px",
               marginTop: {
                  xs: -7,
               },
            }}
         >
            <CardContent>
               <Typography variant="h6">
                  Question {currentQuestion + 1} of {quizData.length}
               </Typography>
               <Typography
                  variant="body1"
                  sx={{
                     mt: 2,
                     wordBreak: "break-word",
                  }}
               >
                  {question.question}
               </Typography>

               {question.type === "mcq" ? (
                  <Stack
                     direction={{ xs: "column", sm: "row" }}
                     spacing={2}
                     sx={{ mt: 2 }}
                  >
                     {question.options.map((option, idx) => {
                        let bgColor = "inherit";
                        let textColor = "inherit";

                        if (selectedOption !== null) {
                           if (option.key === question.correctAnswer) {
                              bgColor = "green";
                              textColor = "rgba(255, 255, 255, 0.75)";
                           }
                           if (
                              option.key === selectedOption &&
                              option.key !== question.correctAnswer
                           ) {
                              bgColor = "red";
                              textColor = "rgba(255, 255, 255, 0.75)";
                           }
                        }

                        return (
                           <Button
                              key={idx}
                              variant="outlined"
                              onClick={() => handleMCQSelect(option.key)}
                              sx={{
                                 backgroundColor: bgColor,
                                 color: textColor,
                                 flex: 1,
                                 whiteSpace: "normal",
                                 textAlign: "center",
                                 wordBreak: "break-word",
                                 "&.Mui-disabled": {
                                    color: "white",
                                    opacity: 0.7,
                                 },
                              }}
                              disabled={selectedOption !== null || timeOut}
                           >
                              {`${option.key}. ${option.text}`}
                           </Button>
                        );
                     })}
                  </Stack>
               ) : (
                  <Box sx={{ mt: 2 }}>
                     <TextField
                        label="Your Answer"
                        type="number"
                        variant="outlined"
                        fullWidth
                        value={integerAnswer}
                        onChange={(e) => setIntegerAnswer(e.target.value)}
                        disabled={feedback !== null || timeOut}
                        autoFocus
                        sx={{
                           "& .MuiOutlinedInput-root": {
                              "& fieldset": {
                                 borderColor:
                                    feedback === "Correct!"
                                       ? "green"
                                       : feedback &&
                                         feedback.startsWith("Incorrect!")
                                       ? "red"
                                       : undefined,
                              },
                           },
                        }}
                     />
                     {feedback === null && (
                        <Button
                           variant="contained"
                           sx={{ mt: 2 }}
                           onClick={handleIntegerSubmit}
                           disabled={integerAnswer === "" || timeOut}
                        >
                           Submit Answer
                        </Button>
                     )}
                  </Box>
               )}

               <Box sx={{ mt: 2 }}>
                  <Timer
                     duration={30}
                     onTimeOut={handleTimeOut}
                     stop={!isTimerActive}
                     key={currentQuestion}
                  />
               </Box>
               {feedback && (
                  <Typography variant="subtitle1" sx={{ mt: 2 }}>
                     {feedback}
                  </Typography>
               )}
               {((question.type === "mcq" && selectedOption !== null) ||
                  (question.type === "integer" && feedback !== null) ||
                  timeOut) && (
                  <Button
                     variant="contained"
                     sx={{ mt: 2 }}
                     onClick={handleNextQuestion}
                  >
                     Next
                  </Button>
               )}
            </CardContent>
         </Card>
      </Box>
   );
}

export default Quiz;
