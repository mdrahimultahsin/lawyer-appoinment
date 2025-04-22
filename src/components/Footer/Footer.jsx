import React from "react";
import logo from "../../assets/logo-footer.png";
import {Link} from "react-router";
import facebook from "../../assets/Group 1171275145.png";
import linkedin from "../../assets/Group 1171275148.png";
import x from "../../assets/twitter-logo-2 3.png";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    {id: 1, name: "Home", path: "/"},
    {id: 2, name: "My-Bookings", path: "/my-bookings"},
    {id: 3, name: "Blogs", path: "/blogs"},
    {id: 4, name: "Contact Us", path: "/contact"},
  ];

  return (
    <div className="min-h-80 bg-black text-white flex flex-col gap-1 items-center justify-center">
      <div>
        <Link to="/" className="flex gap-1">
          <img src={logo} alt="" className="w-11" />
          <h2 className="font-logo text-3xl">Law.BD</h2>
        </Link>
      </div>
      <div className="border-b-2 border-dashed border-[#fff2] w-full py-6">
        <ul className="flex justify-center gap-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul className="flex py-4 gap-6">
          <li>
            <a target="_blank" href="https://www.facebook.com/mdrhtahsin">
              <img src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/mdrahimultahsin/">
              <img src={linkedin} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.x.com/mdrhtahsin">
              <img src={x} alt="" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.github.com/mdrahimultahsin">
              <FaGithub size={30}/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
