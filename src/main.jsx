import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./ThemeProvider";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline } from "@mui/material";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider />
    <CssBaseline />
  </React.StrictMode>
);
