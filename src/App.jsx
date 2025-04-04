import Card from "./componet/card";
import Header from "./componet/header";
import useLocalStorage from "use-local-storage";

function App() {
  const prefences = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", prefences);
  return (
    <div
      style={{ backgroundColor: "var(--background-color)" }}
      data-theme={darkMode ? "dark" : "light"}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Card />
    </div>
  );
}

export default App;
