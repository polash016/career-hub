import React from "react";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "bg-orange-500 px-2 text-white rounded-md" : "")}
    >
        {children}
    </NavLink>
  );
};

export default ActiveLink;
