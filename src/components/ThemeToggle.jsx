import { useState, useEffect } from 'react';
import sun from '../assets/sun.png';
import moon from '../assets/moon.png';

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <button
      onClick={toggleTheme}
      className="flex justify-center items-center"
      aria-label="Toggle theme"
    >
      <img
        src={moon}
        alt="Light mode icon"
        className={`w-5 h-5 ${darkMode ? 'hidden' : 'block'}`}
      />
      <img
        src={sun}
        alt="Dark mode icon"
        className={`w-5 h-5 ${darkMode ? 'block' : 'hidden'}`}
      />
    </button>
  );
};
