import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from './Job';

const FeatureJobs = () => {
    const [jobs,setJobs] = useState([]);
    // const [slice, setSlice] = useState(false)
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data));
    });
    const handleJobDetails = id => {
        console.log(id);
    }
    return (
        <div className='mb-8'>
            <div className='text-center'>
            <h2 className='text-5xl font-extrabold mb-4'>Featured Jobs</h2>
            <p className='text-base text-slate-600 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-6'>
                {
                    jobs.slice(0,4).map(job => <Job
                    key={job.id}
                    job={job}
                    handleJobDetails = {handleJobDetails}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default FeatureJobs;