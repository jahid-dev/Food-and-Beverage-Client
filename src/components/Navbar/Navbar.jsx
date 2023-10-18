import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("User logged out successfully"))
      .catch((error) => console.error(error));
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center justify-between mb-7 mt-5 ml-2 text-center lg:flex-row">
      <div className="text-5xl font-serif font-semibold">Food</div>
      <div className="text-xl space-x-5 hidden lg:flex">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-4 rounded-lg  border-[#3ce7ae]" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "border-4 rounded-lg  border-[#3ce7ae]" : ""
          }
        >
          Contact US
        </NavLink>
      </div>
      {user ? (
        <div className="lg:flex">
          {user.photoURL ? (
            <img className="rounded-full w-10 lg:mb-2 ml-36" src={user.photoURL} alt="User" />
          ) : null}
          <div className="flex flex-col">
            <span className="font-semibold font-serif mr-5 lg:mr-10">Name: {user.displayName}</span>
            <span className="font-semibold font-serif mr-5 lg:mr-10">Email: {user.email}</span>
          </div>
          <a onClick={handleLogOut} className="btn btn-sm">
            Sign Out
          </a>
        </div>
      ) : (
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-3xl">
            ☰
          </button>
          {menuOpen && (
            <div className="absolute top-16 left-0 bg-white text-center w-full py-2 border-b-2 border-[#3ce7ae]">
              <Link to="/" className="block text-xl py-2">Home</Link>
              <Link to="/contact" className="block text-xl py-2">Contact US</Link>
            </div>
          )}
        </div>
      )}
      <div className="mt-2 lg:mt-0">
        {user ? null : (
          <Link to="/login">
            <button className="btn btn-sm">Sign In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
