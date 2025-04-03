// import { useState } from "react";
import Header from "./componet/header";
import useLocalStorage from "use-local-storage";

function App() {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  return (
    <div
      style={{ backgroundColor: "var(--background-color)" }}
      className="h-screen"
      data-theme={darkMode ? "dark" : "light"}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default App;
