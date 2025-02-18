import React from "react";
import { Typography, Box } from "@mui/material";

const Scoreboard = ({ score, total }) => {
   return (
      <Box sx={{ mt: 4, textAlign: "center" }}>
         <Typography variant="h5">
            Your Score: {score} / {total}
         </Typography>
         <Typography variant="subtitle1">
            {((score / total) * 100).toFixed(2)}%
         </Typography>
      </Box>
   );
};

export default Scoreboard;
