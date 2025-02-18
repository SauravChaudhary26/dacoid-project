import React, { useEffect, useState } from "react";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { getAttempts } from "../utils/indexedDB";

const History = () => {
   const [history, setHistory] = useState([]);

   useEffect(() => {
      getAttempts().then((data) => {
         setHistory(data);
      });
   }, []);

   if (history.length === 0) {
      return (
         <Box
            sx={{
               mt: 4,
               display: "flex",
               flexDirection: "column",
               alignItems: "center",
            }}
         >
            <Typography variant="h6">No attempt history found.</Typography>
         </Box>
      );
   }

   return (
      <Box
         sx={{
            mt: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
         }}
      >
         <Typography variant="h5">Attempt History</Typography>
         <List sx={{ width: "100%", maxWidth: 360 }}>
            {history.map((attempt, idx) => (
               <ListItem key={idx} sx={{ justifyContent: "center" }}>
                  <ListItemText
                     primary={`Date: ${new Date(
                        attempt.date
                     ).toLocaleString()} - Score: ${attempt.score}`}
                     sx={{ textAlign: "center" }}
                  />
               </ListItem>
            ))}
         </List>
      </Box>
   );
};

export default History;
