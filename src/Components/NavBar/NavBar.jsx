import React from 'react'
import { MdOutlineFavoriteBorder, MdOutlineShoppingCart } from 'react-icons/md'
import { Link, NavLink, useLocation } from 'react-router'

const NavBar = () => {
    const navLink =
        <>
            <li><NavLink>Home</NavLink></li>
            <li><NavLink>Satictics</NavLink></li>
            <li><NavLink>Dashboard</NavLink></li>
        </>
    const location = useLocation();
    console.log(location);


    return (
        <div
            className={`navbar  md:px-20 mx-auto mt-7 rounded-t-3xl
                ${location.pathname === "/" ? "bg-purple-600 text-white max-w-screen-2xl" : "bg-white"}
                `}
        >
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className={`menu text-lg menu-sm dropdown-content rounded-box z-[1] mt-3 ml-5 w-52 p-2 shadow
                            ${location.pathname !== "/" && "bg-white text-black"}
                            `}
                    >
                        {navLink}
                    </ul>
                </div>
                <Link to='/' className="px-4 font-medium md:text-2xl">Gadget Shines</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-lg menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end text-2xl md:text-4xl">
                <MdOutlineShoppingCart className='border rounded-full text-black p-1 bg-white ' />
                <MdOutlineFavoriteBorder className='border rounded-full text-black p-1 bg-white m-3' />
            </div>
        </div>
    )
}

export default NavBar