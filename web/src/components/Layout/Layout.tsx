import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

import UserMenu from "../UserMenu/UserMenu";
import Header from "../../components/Header/Header";
import { useDarkMode } from "../../hooks/useDarkMode";
import { useAuth } from "../../hooks/useAuth";

const Layout: React.FC = () => {
  const { user, logout } = useAuth();
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);
  const toggleUserMenu = () => setIsUserMenuOpen((prev) => !prev);

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    <div>
      <Header
        userAvatarUrl={user.avatarUrl}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        toggleUserMenu={toggleUserMenu}
      />
      <main>
        <Outlet />
      </main>
      <UserMenu
        isOpen={isUserMenuOpen}
        userAvatarUrl={user.avatarUrl}
        userName={user.name}
        userEmail={user.email}
        onClose={toggleUserMenu}
        onLogout={logout}
      />
    </div>
  );
};

export default Layout;
