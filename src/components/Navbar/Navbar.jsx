import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase/Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("user logged out successfully"))
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex mr-2  items-center mb-7 ml-2 mt-5 flex-col text-center lg:flex-row  lg:justify-between">
      <div className="text-5xl font-serif font-semibold"> Food</div>
      <div className="text-xl space-x-5">
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
      <div className="mt-2">
        {user ? (
          <>
            {user.photoURL ? (
              <img
                className="rounded-full w-10 lg:mb-2 ml-36"
                src={user.photoURL}
                alt="User"
              />
            ) : null}
            <div className="flex flex-col">
              <span className="font-semibold font-serif mr-5 lg:mr-10">
                User Name: {user.displayName}
              </span>
              <span className="font-semibold font-serif mr-5 lg:mr-10">
                User Email: {user.email}
              </span>
            </div>
            <a onClick={handleLogOut} className="btn btn-sm">
              Sign Out
            </a>
          </>
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

