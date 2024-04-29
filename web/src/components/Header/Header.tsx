import { useState } from "react";
import { ConnectedProps, connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "lucide-react";

import { PATH } from "@/constants/paths";
import { RootState } from "@/store/store";

import { UserMenu } from "./UserMenu";
import { useDarkMode } from "./useDarkMode";

const mapStateToProps = (state: RootState) => ({
  user: state.authReducer.user,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}

const _Header: React.FC<Props> = ({ user }) => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const [isMenuVisible, setMenuVisible] = useState(false);

  return (
    <header
      className="
        md:sticky lg:top-0 flex flex-wrap
        bg-white border-stone-200 border-b border-solid
        dark:bg-dark-mixed-100 dark:border-dark-mixed-300"
    >
      <div className="mx-auto w-11/12 rounded-xl">
        <div className="flex items-stretch justify-between grow py-3">
          <div className="flex items-center gap-2">
            <div className="flex relative items-center ml-2">
              <button
                className="
                  flex items-center justify-center w-12 h-12 rounded-full
                  border-stone-200 border 
                  dark:border-dark-mixed-300"
              >
                <img src="logo.png" alt="Logo" className="w-full h-full rounded-full" data-testid="Header_logo_img" />
              </button>
            </div>
            <div className="flex relative items-center ml-2">
              <NavLink
                to={PATH.HOME}
                className="
                  font-semibold 
                  text-dark 
                  dark:text-white"
                data-testid="Header_home_link"
              >
                Home
              </NavLink>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex relative items-center">
              <button
                className="
                  flex items-center justify-center w-12 h-12 rounded-lg
                  text-stone-500 border-stone-200 border border-solid
                  dark:text-white dark:border-dark-mixed-300"
                onClick={() => setIsDarkMode((prev) => !prev)}
                data-testid="Header_darkMode_button"
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
              >
                <img
                  src={user?.avatarUrl}
                  alt="User Avatar"
                  className="w-full h-full rounded-full"
                  onClick={() => setMenuVisible(true)}
                  data-testid="Header_userAvatar_img"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <UserMenu isVisible={isMenuVisible} onClose={() => setMenuVisible(false)} />
    </header>
  );
};

const Header = connector(_Header);

export { Header };
