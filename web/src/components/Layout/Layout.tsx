import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import { getSessionUser, removeAll } from "../../utils/local-storage.utils";
import UserMenu from "../UserMenu/UserMenu";

const Layout: React.FC = () => {
  const sessionUser = getSessionUser();
  const navigate = useNavigate();

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

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

  return sessionUser ? (
    <div>
      <Header
        userAvatarUrl={sessionUser.avatarUrl}
        isDarkMode={isDarkMode}
        toggleDarkMode={() => setIsDarkMode((prev) => !prev)}
        toggleUserMenu={() => setIsUserMenuOpen((prev) => !prev)}
      />
      <main>
        <Outlet />
      </main>
      <UserMenu
        isOpen={isUserMenuOpen}
        userAvatarUrl={sessionUser.avatarUrl}
        userName={sessionUser.name}
        userEmail={sessionUser.email}
        onClose={() => setIsUserMenuOpen(false)}
        onLogout={() => {
          removeAll();
          navigate("/auth/login");
        }}
      />
    </div>
  ) : (
    <Navigate to="/auth/login" replace />
  );
};

export default Layout;
