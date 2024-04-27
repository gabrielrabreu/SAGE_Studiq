import React from "react";
import { NavLink } from "react-router-dom";
import {
  BellIcon,
  MenuIcon,
  MoonIcon,
  SearchIcon,
  SunIcon,
  XIcon,
} from "lucide-react";

interface HeaderProps {
  userAvatarUrl: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  toggleUserMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({
  userAvatarUrl,
  isDarkMode,
  toggleDarkMode,
  toggleUserMenu,
}) => {
  return (
    <header
      className="
        md:sticky lg:top-0 flex flex-wrap
        bg-white border-stone-200 border-b border-solid
        dark:bg-dark-mixed-100 dark:border-dark-mixed-300"
      data-testid="header-div"
    >
      <div className="mx-auto w-11/12 rounded-xl">
        <div className="flex items-stretch justify-between grow py-3">
          <div className="flex items-center gap-2">
            <div className="hidden relative items-center">
              <button
                className="
                  flex items-center justify-center w-12 h-12 rounded-lg
                  text-stone-500 border-stone-200 border border-solid
                  dark:text-white dark:border-dark-mixed-300"
              >
                <MenuIcon />
              </button>
            </div>
            <div className="flex relative items-center ml-2">
              <button
                className="
                  flex items-center justify-center w-12 h-12 rounded-full
                  border-stone-200 border 
                  dark:border-dark-mixed-300"
              >
                <img
                  src="logo.png"
                  alt="Logo"
                  className="w-full h-full rounded-full"
                />
              </button>
            </div>
            <div className="flex relative items-center ml-2">
              <NavLink
                to="/"
                className="
                    font-semibold 
                    text-dark 
                    dark:text-white"
                data-testid="home-link"
              >
                Home
              </NavLink>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden relative items-center">
              <span
                className="
                  absolute ml-4 leading-none -translate-y-1/2 top-1/2 
                  text-stone-500
                  dark:text-white"
              >
                <SearchIcon />
              </span>
              <input
                className="
                  block w-full min-w-[70px] py-3 pl-12 pr-4 text-base font-medium leading-normal placeholder:text-secondary-dark peer outline-none appearance-none bg-clip-padding rounded-lg
                  bg-white text-stone-500 border-stone-200 border border-solid
                  dark:bg-dark-mixed-300 dark:text-white dark:border-dark-mixed-300"
                placeholder="Search..."
                type="text"
              />
              <span
                className="
                  absolute right-0 left-auto mr-4 leading-none -translate-y-1/2 peer-placeholder-shown:hidden top-1/2
                  text-stone-500
                  dark:text-white"
              >
                <XIcon />
              </span>
            </div>
            <div className="hidden relative items-center">
              <button
                className="
                  flex items-center justify-center w-12 h-12 rounded-lg
                  text-stone-500 border-stone-200 border border-solid
                  dark:text-white dark:border-dark-mixed-300"
              >
                <BellIcon />
              </button>
            </div>
            <div className="flex relative items-center">
              <button
                className="
                  flex items-center justify-center w-12 h-12 rounded-lg
                  text-stone-500 border-stone-200 border border-solid
                  dark:text-white dark:border-dark-mixed-300"
                onClick={toggleDarkMode}
                data-testid="toggle-dark-mode-button"
              >
                {isDarkMode ? <MoonIcon /> : <SunIcon />}
              </button>
            </div>
            <div className="flex relative items-center">
              <button
                className="
                  flex items-center justify-center w-12 h-12 rounded-full
                  border-stone-200 border 
                  dark:border-dark-mixed-300"
                data-testid="toggle-user-menu-button"
                onClick={toggleUserMenu}
              >
                <img
                  src={userAvatarUrl}
                  alt="User Avatar"
                  className="w-full h-full rounded-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
