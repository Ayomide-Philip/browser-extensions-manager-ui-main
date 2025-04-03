import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      style={{ backgroundColor: "var(--background-color)" }}
      className="h-screen"
      data-theme={darkMode ? "dark" : "light"}
    >
      <header className="body-font max-w-11/12 justify-center items-center mx-auto  pt-5">
        <div
          className="container mx-auto flex flex-row items-center rounded-2xl pl-3 pr-3"
          style={{ backgroundColor: "var( --heading-background-color)" }}
        >
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="/public/images/brand3d_logo-removebg-preview.png"
              height="70px"
              width="70px"
              alt="brand3d logo"
              className="rounded-full"
            />
            <span className="ml-3 text-xl text-black dark:text-white ">
              Extensions
            </span>
          </a>
          <button
            className="inline-flex items-center ml-auto"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <img src="/images/icon-sun.svg" alt="icon-sun" />
            ) : (
              <img src="/images/icon-moon.svg" alt="icon-moon" />
            )}
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
