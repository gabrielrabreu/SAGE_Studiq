import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/Header/Header";
import { getSessionUser } from "../../utils/local-storage.utils";

const Layout: React.FC = () => {
  const sessionUser = getSessionUser();

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div>
      <Header
        userAvatarUrl={sessionUser?.avatarUrl}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode((prev) => !prev)}
      />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
