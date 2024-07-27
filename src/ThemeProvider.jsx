import { createContext, useState } from "react";
import App from "./App";

export const ThemeContext = createContext();
export default function ThemeProvider() {
  const [mode, setMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <App />
    </ThemeContext.Provider>
  );
}
