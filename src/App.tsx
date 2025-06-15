import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-content dark:bg-background-dark dark:text-content-dark">
      <button
        className="fixed z-50 p-2 text-sm bg-gray-200 rounded top-4 right-4 dark:bg-gray-700 md:text-base"
        onClick={() => setIsDark((prev) => !prev)}
        aria-label="Toggle Dark Mode"
      >
        {isDark ? "☀️ Light" : "🌙 Dark"}
      </button>

      <Outlet />
    </div>
  );
}

export default App;
