import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FaTimes, FaBars } from "react-icons/fa";

const img = ["assets/l.png"];

const Navigation = () => {
  const Links = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "ABOUT", link: "about" },
    { id: 3, name: "RATE ADVISORY", link: "rate-advisory" },
    { id: 4, name: "NOTICE", link: "notice" },
    { id: 5, name: "LIFELINE RATE", link: "lifeline" },
    { id: 6, name: "PAYMENT PARTNERS", link: "partners" },
    { id: 7, name: "BILL INQUIRIES", link: "inquiries" },
    { id: 8, name: "PRIVACY NOTICE", link: "privacy-notice" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0 fixed z-50">
      <div className="lg:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center justify-center text-gray-800">
          <img src={img[0]} alt="logo" className="w-12 h-12" />
          <div className="px-4 sm:block hidden text-lg md:text-2xl lg:text-3xl">
            BOHECO II
          </div>
          <a
            className="text-blue-600 sm:px-0 px-4"
            href="https://www.facebook.com/boheco2"
          >
            <BsFacebook size={30} />
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>
        <ul
          className={`lg:flex lg:item-center lg:pb-0 pb-12 absolute lg:static bg-white lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-9 transition-all duration-300 ease-in ${
            open
              ? "top-20 opacity-100"
              : "top-[-490px] lg:opacity-100 opacity-0"
          }`}
        >
          {Links.map((link) => (
            <li key={link.id} className="lg:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={link.link}
                className={({ isActive }) =>
                  isActive
                    ? "active text-gray-800 hover:text-red-600"
                    : "text-gray-800 hover:text-red-600"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
