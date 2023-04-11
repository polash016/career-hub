import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../utilities/fakedb";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const savedJobs = [];

  const added = getShoppingCart();
    for(const id in added){
        const addedJob = jobs.find(job => job.id === id)
        savedJobs.push(addedJob)
    }
  return (
    <div>
      <div className="flex items-center justify-center w-full h-40">
        <h4>Applied Jobs</h4>
      </div>
      <div className="mb-8">
            <div>
                {
                    savedJobs.map(job => <AppliedJob 
                    key={job.id}
                    job={job}
                    ></AppliedJob>)
                }
            </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
