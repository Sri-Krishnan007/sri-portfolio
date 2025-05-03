import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className="text-2xl font-extrabold text-blue-700 dark:text-blue-400 tracking-wide hover:text-blue-800 dark:hover:text-blue-300 transition"
            >
              Sri Krishnan
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 items-center">
            {["Home", "About", "Projects", "Experience", "Resume", "Certificates", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Dark Mode Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 px-3 py-1 rounded-md bg-gray-200 dark:bg-gray-700 text-sm text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition md:block"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
