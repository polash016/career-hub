import React from "react";

const Header = () => {
  return (
    <div className="grid lg:grid-cols-2 mt-8">
      <div>
        <h1 className="text-7xl font-extrabold">
          One Step Closure To Your{" "}
          <span className="text-blue-500">Dream Job</span>
        </h1>
        <p className="text-lg font-medium mt-6 text-slate-600">
          Explore thousands of job opportunities with all the information you
          need. Its your future. Come find it. Manage all your job application
          from start to finish
        </p>
        <button className="btn text-xl font-bold bg-blue-500 text-white border-none mt-6">
          Get Started
        </button>
      </div>
      <div>
        <img className="w-[100%] h-[90%] m-8 lg:-mt-8" src="/public/person.png" alt="" />
      </div>
    </div>
  );
};

export default Header;
