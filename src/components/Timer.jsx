import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

const Timer = ({ duration, onTimeOut, stop }) => {
   const [timeLeft, setTimeLeft] = useState(duration);

   useEffect(() => {
      if (stop) return; // Stop the timer when requested

      const timerId = setInterval(() => {
         setTimeLeft((prev) => {
            if (prev <= 1) {
               clearInterval(timerId);
               onTimeOut();
               return 0;
            }
            return prev - 1;
         });
      }, 1000);

      return () => clearInterval(timerId);
   }, [stop, onTimeOut]);

   return <Typography variant="h6">Time left: {timeLeft}s</Typography>;
};

export default Timer;
