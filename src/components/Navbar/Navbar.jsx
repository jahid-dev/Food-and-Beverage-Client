import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
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
    <div className="flex items-center justify-between mb-7 mt-5 ml-2 text-center lg:flex-row">
      <Link to="/" className="flex items-center">
        <img className="w-14" src="https://i.ibb.co/C51GJcr/m2i8-Z5-N4-H7-N4b1-K9.png" alt="logo" />
      </Link>
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
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-4 rounded-lg  border-[#3ce7ae]" : ""
          }
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/addproduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-b-4 rounded-lg  border-[#3ce7ae]" : ""
          }
        >
          Add Product
        </NavLink>
      </div>
      <div className="lg:hidden">
        <button onClick={toggleMenu} className="text-3xl">
          ☰
        </button>
        {menuOpen && (
          <div className="absolute top-0 left-0 bg-white text-center w-full py-2 border-b-2 border-[#3ce7ae]">
            <button
              onClick={closeMenu}
              className="block text-xl py-2 text-red-500 cursor-pointer absolute top-2 left-2"
            >
              X
            </button>
            <Link to="/" className="block text-xl py-2" onClick={closeMenu}>
              Home
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
              <span className="font-semibold font-serif mr-5 lg:mr-10">{user.email}</span>
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
    </div>
  );
};

export default Navbar;
