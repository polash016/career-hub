import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";
import vector from '../../public/images/Vector.png'
import vector2 from '../../public/images/Vector-1.png'

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const savedJobs = [];
  
  const added = getShoppingCart();
  for(const id in added) {
    const addedJob = jobs.find(job => job.id === id);
    savedJobs.push(addedJob);
  }

  // filter saved jobs based on remote_or_onsite property
  const [filter, setFilter] = useState("");
  const filteredJobs = filter
    ? savedJobs.filter(job => job.remote_or_onsite === filter)
    : savedJobs;

  return (
    <div>
      <div className='flex flex-row items-center'>
                <div className=''><img src={vector} alt="" className=' ' /></div>
                <div className='basis-2/4 flex justify-center items-center'><p className="text-2xl text-center">Applied Jobs</p></div>
                <div><img src={vector2} alt="" /> </div>
            </div>
      <div className="mb-8">
        <div className="flex justify-end m-2">
            <p>Filter By:</p>
          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
          </div>
          {filteredJobs.map(job => (
            <AppliedJob key={job.id} job={job} />
          ))}
        
      </div>
    </div>
  );
};

export default AppliedJobs;
