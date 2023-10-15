import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logoWhite from "../../assets/images/Learn-Code-Logo-white.png";
import logoColor from "../../assets/images/Learn-Code-Logo.png";

const Navbar = () => {
  const [color, setColor] = useState("transparent");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeNavColor = () => {
      if (window.scrollY >= 90) {
        setColor("#330066");
        setIsScrolled(true);
      } else {
        setColor("transparent");
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", changeNavColor);
  }, []);
  const navLinks = (
    <>
      <li>
        <NavLink className="text-[1.2em]" to="/courses">
          Courses
        </NavLink>
      </li>
      <li>
        <NavLink className="text-[1.2em]" to="/trained">
          Get Trained
        </NavLink>
      </li>
      <li>
        <NavLink className="text-[1.2em]" to="/resources">
          Resources
        </NavLink>
      </li>
      <li>
        <NavLink className="text-[1.2em]" to="/blog">
          Blog
        </NavLink>
      </li>
    </>
  );
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-[10] px-20 text-white font-bold ease-in duration-300 "
    >
      <div className="navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="normal-case text-2xl font-semibold flex ">
            <img
              className="w-1/12 mr-3"
              src={isScrolled ? logoWhite : logoColor}
              alt=""
            />
            Learn Code
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="px-8 py-3 bg-[#330066] hover:rounded-lg text-white text-xl">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
