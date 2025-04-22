import React, {useState} from "react";
import {Link, NavLink} from "react-router";
import logo from "../../assets/logo.png";
import {FiMenu} from "react-icons/fi";
import {TfiClose} from "react-icons/tfi";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navLinks = [
    {id: 1, name: "Home", path: "/"},
    {id: 2, name: "My-Bookings", path: "/my-bookings"},
    {id: 3, name: "Blogs", path: "/blogs"},
    {id: 4, name: "Contact Us", path: "/contact"},
  ];

  return (
    <nav className="border-b border-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex gap-4 items-center">
          <FiMenu
            className={`${
              showMenu ? "hidden" : "block"
            } cursor-pointer md:hidden`}
            onClick={() => setShowMenu((prev) => !prev)}
            size={28}
          />
          <TfiClose
            onClick={() => setShowMenu((prev) => !prev)}
            className={`${showMenu ? "block" : "hidden"} cursor-pointer`}
            size={28}
          />
          <Link to="/" className="flex gap-1">
            <img src={logo} alt="" className="w-11" />
            <h2 className="font-logo text-3xl">Law.BD</h2>
          </Link>
        </div>
        {/* Navlinks */}
        <div className="hidden md:block">
          <ul className="flex gap-2 lg:gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="text-lg font-medium px-3 md:px-1 lg:px-3"
              >
                <NavLink
                  to={link.path}
                  className={({isActive}) =>
                    isActive
                      ? "text-black border-b-3 px-1 py-2"
                      : "text-gradiesh-color px-1 py-2 hover:text-black"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <button className="bg-primary-color px-4 py-2 rounded-full font-bold text-lg text-white cursor-pointer">
            Contact Now
          </button>
        </div>
        {/* Mobile Menu */}
        <ul
          className={`absolute top-18 z-50 bg-base-100 shadow-md duration-500 ${
            showMenu ? "left-2" : "-left-50"
          }`}
        >
          {navLinks.map((link) => (
            <li
              onClick={() => setShowMenu((prev) => !prev)}
              className="text-lg font-semibold flex hover:bg-gray-200 px-4 py-2 group cursor-pointer"
              key={link.id}
            >
              <NavLink
                to={link.path}
                className={({isActive}) =>
                  isActive
                    ? "text-black "
                    : "text-gradiesh-color  group-hover:text-black"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
