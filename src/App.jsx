import { useContext, useEffect, useMemo } from "react";
import { ThemeContext } from "./ThemeProvider";
import Home from "./Home";

export default function App() {
  const { mode } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: mode ? "black" : "white",
        color: mode ? "white" : "black",
      }}
    >
      <Home />
    </div>
  );
}
