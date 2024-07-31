import React, { createContext, useState, useEffect } from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App";

export const ThemeContext = createContext();

export default function ThemeProvider() {
  const [mode, setMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: mode ? "dark" : "light",
    },
  });

  useEffect(() => {
    document.body.style.backgroundColor = mode ? "black" : "white";
    document.body.style.color = mode ? "white" : "black";
    document.body.style.margin = 0;
    document.body.style.height = "100vh";
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
}
