import React, { useEffect, useState } from "react";
import { Typography, Box, List, ListItem, ListItemText } from "@mui/material";
import { getAttempts } from "../utils/indexedDB";

const History = () => {
   //maintain the state of history
   const [history, setHistory] = useState([]);

   //get the previous attempts data from indexedDb database
   useEffect(() => {
      getAttempts().then((data) => {
         setHistory(data);
      });
   }, []);

   //Component to render when user try the quiz for the first time
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

   //material ui list to display all the previous attemps data
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
