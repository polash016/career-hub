import React from "react";
import currencyIcon from "../../public/images/Currency.png";
import locationIcon from "../../public/images/Location.png";

const Job = ({ job }) => {
  const {
    company_logo,
    company_name,
    job_title,
    remote_or_onsite,
    fulltime_or_parttime,
    location,
    salary,
  } = job;
  return (
    <div className="border p-10">
      <img className="w-28 h-10 mb-8" src={company_logo} alt="" />
      <h4 className="font-extrabold text-2xl">{job_title}</h4>
      <p className="font-semibold text-xl text-slate-500">{company_name}</p>
      <button className="border rounded-md px-2 py-1 text-blue-500 mx-4">{remote_or_onsite}</button>
      <button>{fulltime_or_parttime}</button>
      <div>
        <div>
          <img src={locationIcon} alt="" />
          <p className="font-semibold text-xl text-slate-500">{location}</p>
        </div>
        <div>
          <img src={currencyIcon} alt="" />
          <p className="font-semibold text-xl text-slate-500">{salary}</p>
        </div>
      </div>
    </div>
  );
};

export default Job;
