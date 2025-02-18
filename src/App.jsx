import React from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Quiz from "./components/Quiz";

const darkTheme = createTheme({
   palette: {
      mode: "dark",
   },
});

function App() {
   return (
      <ThemeProvider theme={darkTheme}>
         <CssBaseline /> {/* Dark mode from material ui */}
         <Quiz />
      </ThemeProvider>
   );
}

export default App;
