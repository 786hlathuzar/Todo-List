import { useContext, useEffect, useMemo } from "react";
import { ThemeContext } from "./ThemeProvider";
import Home from "./Home";

export default function App() {
  const { mode } = useContext(ThemeContext);

  useEffect(() => {
    console.log("hello world");
  }, []);

  function expensiveFunction() {
    console.log("Expensive Function");
    return "Result";
  }
  const result = useMemo(() => {
    return expensiveFunction();
  }, []);

  console.log(result);

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
