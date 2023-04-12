import React from "react";
import headerImg from '../../public/images/person.png'

const Header = () => {
  return (
    <div className="grid lg:grid-cols-2 mt-8 mb-8 p-4 bg-base-100">
      <div>
        <h1 className="text-7xl font-extrabold mb-6">
          One Step <br /> Closure To Your <br />
          <span className="text-blue-500">Dream Job</span>
        </h1>
        <p className="text-lg font-medium mt-6 text-slate-600 leading-8">
          Explore thousands of job opportunities with all the <br /> information you
          need. Its your future. Come find it. Manage all <br /> your job application
          from start to finish
        </p>
        <button className="btn text-xl font-bold bg-blue-500 text-white border-none mt-8">
          Get Started
        </button>
      </div>
      <div>
        <img className="w-[100%] h-[90%] m-8 lg:-mt-8" src={headerImg} alt="" />
      </div>
    </div>
  );
};

export default Header;
