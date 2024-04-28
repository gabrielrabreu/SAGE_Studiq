import { NavLink } from "react-router-dom";

import { PATH } from "../../constants/paths";

const _Header = () => {
  return (
    <header
      className="
        md:sticky lg:top-0 flex flex-wrap
        bg-white border-stone-200 border-b border-solid
        dark:bg-dark-mixed-100 dark:border-dark-mixed-300"
    >
      <div className="mx-auto w-11/12 rounded-xl">
        <div className="flex items-stretch justify-between grow py-3">
          <NavLink to={PATH.HOME}>Home</NavLink>
          <NavLink to={PATH.LOGIN}>Login</NavLink>
        </div>
      </div>
    </header>
  );
};

const Header = _Header;

export { Header };
