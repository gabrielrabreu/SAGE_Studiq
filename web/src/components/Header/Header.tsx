import React from "react";
import { NavLink } from "react-router-dom";
import { BellIcon, MoonIcon, SearchIcon, SunIcon, XIcon } from "lucide-react";

interface HeaderProps {
  userAvatarUrl?: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({
  userAvatarUrl,
  isDarkMode,
  toggleDarkMode,
}) => {
  return (
    <header
      className="
        md:sticky lg:top-0 flex flex-wrap
        bg-white border-stone-200 border-b border-solid
        dark:bg-dark-mixed-100 dark:border-dark-mixed-300"
    >
      <div className="px-3 mx-auto w-11/12 rounded-xl">
        <div className="sm:flex items-stretch justify-between grow lg:mb-0 py-3 px-5">
          <div className="flex items-center justify-center mb-5 mr-3 lg:mb-0">
            <span
              className="
                my-0 flex font-semibold text-2xl flex-col justify-center 
                text-dark
                dark:text-white"
            >
              studiq
            </span>
            <ul className="flex ml-4">
              <li className="ml-2">
                <NavLink
                  to="/auth/login"
                  className="
                    font-semibold 
                    text-dark 
                    dark:text-white"
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center lg:shrink-0 lg:flex-nowrap">
            <div className="hidden relative items-center lg:ml-4 sm:mr-0 mr-2">
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
            <div className="hidden relative items-center ml-2 lg:ml-4">
              <button
                className="
                  flex items-center justify-center w-12 h-12 rounded-lg
                  text-stone-500 border-stone-200 border border-solid
                  dark:text-white dark:border-dark-mixed-300"
              >
                <BellIcon />
              </button>
            </div>
            <div className="hidden sm:flex relative items-center ml-2 lg:ml-4">
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
            <div className="hidden sm:flex relative items-center ml-2 lg:ml-4">
              <button className="flex items-center justify-center w-12 h-12 rounded-lg">
                {userAvatarUrl && (
                  <img
                    src={userAvatarUrl}
                    alt="User Avatar"
                    className="w-full h-full rounded-lg"
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
