import React from "react";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";

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
            <ActiveLink to="/">Home</ActiveLink>
            <ActiveLink to="/statistics">Statistics</ActiveLink>
            <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
            <ActiveLink to="/blog">Blog</ActiveLink>
          </ul>
        </div>
        <h2 className=" font-extrabold text-3xl">Future Scope</h2>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">
          <ActiveLink to="/">Home</ActiveLink>
          <ActiveLink to="/statistics">Statistics</ActiveLink>
          <ActiveLink to="/appliedJobs">Applied Jobs</ActiveLink>
          <ActiveLink to="/blog">Blog</ActiveLink>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn text-xl font-bold bg-blue-500 text-white lg:mr-32">Start Applying</button>
      </div>
    </nav>
  );
};

export default NavBar;
