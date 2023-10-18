import  { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AuthContext } from '../../../firebase/Provider/AuthProvider';

const Navbar = () => {
//     const { user, logOut } = useContext(AuthContext);
//   console.log(user);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-white">
            <nav className="flex justify-between items-center w-[92%] mx-auto">
                <div className="flex justify-between items-center w-full">
                    <div className="w-16 cursor-pointer">
                        Food
                    </div>
                    <div className={`nav-links ${menuOpen ? 'block' : 'hidden'}  absolute bg-white left-0 top-[60px] md:top-0 md:w-auto w-full md:flex items-center px-5 md:justify-center`}>
                        <ul className={`flex ${menuOpen ? 'justify-items-center' : 'md:flex-row'} flex-col md:items-center md:gap-[4vw] gap-8`}>
                            <li>
                                <NavLink className="hover:text-gray-500" to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:text-gray-500" to="/">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:text-gray-500" to="/">Add Product</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:text-gray-500" to="/">Services</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:text-gray-500" to="/">Pricing</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-6">
                    {/* <div className="navbar-end">
          {user ? (
            <>
              <p>{user.displayName ? user.displayName : user.email}</p>
              {user.photoURL ? (
                <img className="w-11 rounded-full mx-3" src={user?.photoURL} alt="" />
              ) : (
                <FaUserAlt className="text-2xl  mx-3"></FaUserAlt>
              )}

              <button onClick={logOut} className="bg-slate-800 px-8 py-3">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <NavLink className="mx-5 px-4 py-3" to="/login">
                Login
              </NavLink>
            </>
          )}
        </div> */}
                        {menuOpen ? (
                            <FaTimes onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden" />
                        ) : (
                            <FaBars onClick={toggleMenu} className="text-3xl cursor-pointer md:hidden" />
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;