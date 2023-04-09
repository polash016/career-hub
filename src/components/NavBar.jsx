import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar bg-base-100">
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">Home</Link>
            <Link to="/statistics">Statistics</Link>
            <Link to="/appliedJobs">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
          </ul>
        </div>
        <h2 className=" font-extrabold text-3xl">Career Hub</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/appliedJobs">Applied Jobs</Link>
          <Link to="/blog">Blog</Link>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="text-xl font-bold bg-blue-500 text-white  btn">Start Applying</button>
      </div>
    </nav>
  );
};

export default NavBar;
