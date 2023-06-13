import React from "react";
import { Link } from "react-router-dom";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import { ThemeContext } from "../..";

const NavBar = () => {
  const { dark, changeTheme } = React.useContext(ThemeContext);

  return (
    <nav className="flex justify-center gap-4 px-8 py-2 bg-blue-800 text-white font-semibold ">
      <Link
        className="no-underlinne hover:text-black"
        to="/"
      >
        Home
      </Link>
      <Link
        className="no-underlinne hover:text-black"
        to="/add"
      >
        Add ToDo
      </Link>

      <button onClick={changeTheme}>
        {dark ? <MdDarkMode /> : <MdLightMode />}
      </button>
    </nav>
  );
};

export default NavBar;
