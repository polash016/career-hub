import React from "react";
import currencyIcon from "../../public/images/Currency.png";
import locationIcon from "../../public/images/Location.png";
import { Link } from "react-router-dom";

const Job = ({ job,handleJobDetails }) => {
  const {
    id,
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
      <h4 className="font-extrabold text-2xl mb-2">{job_title}</h4>
      <p className="font-semibold text-xl text-slate-500 mb-2">
        {company_name}
      </p>
      <button className="border rounded-md px-2 py-1 text-blue-500 mr-4 mb-2">
        {remote_or_onsite}
      </button>
      <button className="border rounded-md px-2 py-1 text-blue-500 mx-4">
        {fulltime_or_parttime}
      </button>
      <div className="flex gap-8">
        <div className="flex gap-2">
          <img src={locationIcon} alt="" />
          <p className="font-semibold text-xl text-slate-500">{location}</p>
        </div>
        <div className="flex gap-2">
          <img src={currencyIcon} alt="" />
          <p className="font-semibold text-xl text-slate-500">{salary}</p>
        </div>
      </div>
      <Link to={`/jobDetails/${id}`}>
        <button
          onClick={() => handleJobDetails(id)}
          className="border rounded-md px-2 py-1 text-white bg-blue-500 mt-4"
        >
          View Details
        </button>
      </Link>
    </div>
  );
};

export default Job;
