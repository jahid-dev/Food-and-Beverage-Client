import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../firebase/Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  // update state on toggle
  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // set theme state in local storage on mount & also update local storage on state change
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    // add custom data-theme attribute to the html tag required to update the theme using DaisyUI
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("Logged out successfully"))
      .catch((error) => console.error(error));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mb-7 mt-5 ml-2 text-center">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img className="w-14" src="https://i.ibb.co/C51GJcr/m2i8-Z5-N4-H7-N4b1-K9.png" alt="logo" />
          <div className="text-3xl font-semibold ml-2">TastyTwirl</div>
        </Link>
      </div>
      <div className="text-xl space-x-5 hidden lg:flex">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-4 rounded-lg  border-[#3ce7ae]" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-4 rounded-lg  border-[#3ce7ae]" : ""
          }
        >
          Add Product
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-4 rounded-lg  border-[#3ce7ae]" : ""
          }
        >
         My Cart
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-4 rounded-lg  border-[#3ce7ae]" : ""
          }
        >
          Contact Us
        </NavLink>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          ☰
        </button>
        {menuOpen && (
          <div className="absolute top-0 left-0 bg-[#3ce7ae] text-center w-full py-2 border-b-2 border-[#3ce7ae]">
            <button
              onClick={closeMenu}
              className="block text-xl py-2 text-red-500 cursor-pointer absolute top-2 left-2"
            >
              X
            </button>
            <Link to="/" className="block text-xl py-2" onClick={closeMenu}>
              Home
            </Link>
            <Link to="/addproduct" className="block text-xl py-2" onClick={closeMenu}>
            Add Product
            </Link>
            <Link to="/cart" className="block text-xl py-2" onClick={closeMenu}>
             My Cart
            </Link>
            <Link to="/contact" className="block text-xl py-2" onClick={closeMenu}>
              Contact Us
            </Link>
          </div>
        )}
      </div>
      <div className="mt-2 lg:mt-0">
        {user ? (
          <div className="lg:flex items-center">
            {user.photoURL && (
              <img className="rounded-full w-10 lg:mb-2 ml-36" src={user.photoURL} alt="User" />
            )}
            <div className="flex flex-col">
              <span className="font-semibold font-serif mr-5 lg:mr-10">{user.displayName}</span>
            </div>
            <a onClick={handleLogOut} className="btn btn-sm">
              Sign Out
            </a>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm">Sign In</button>
          </Link>
        )}
      </div>

      <button className={`btn btn-square btn-ghost ${theme === 'dark' ? 'text-dark' : ''}`}>
        <label className="swap swap-rotate w-12 h-12">
          <input
            type="checkbox"
            onChange={handleToggle}
            // show toggle image based on local storage theme
            checked={theme === "light" ? false : true}
          />
          {/* light theme sun image */}
          <img src='https://i.ibb.co/T07wHzr/sun-icon-design-free-png.png' alt="light" className="w-8 h-8 swap-on" />
          {/* dark theme moon image */}
          <img src='https://i.ibb.co/zr45qKn/moon-icon-1868x2048-ifpp8fum.png' alt="dark" className="w-8 h-8 swap-off" />
        </label>
      </button>
    </div>
  );
};

export default Navbar;
