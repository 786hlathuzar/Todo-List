import { useContext, useEffect, useMemo } from "react";
import { ThemeContext } from "./ThemeProvider";
import Home from "./Home";
import { Box } from "@mui/material";

export default function App() {
  const { mode } = useContext(ThemeContext);

  return (
    <Box
      sx={{
        backgroundColor: mode ? "black" : "white",
        color: mode ? "white" : "black",
      }}
    >
      <Home />
    </Box>
  );
}
