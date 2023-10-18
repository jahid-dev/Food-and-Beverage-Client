import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
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
                                <NavLink className="hover:text-gray-500" to="/">Solution</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:text-gray-500" to="/">Resource</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:text-gray-500" to="/">Developers</NavLink>
                            </li>
                            <li>
                                <NavLink className="hover:text-gray-500" to="/">Pricing</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">Sign in</button>
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