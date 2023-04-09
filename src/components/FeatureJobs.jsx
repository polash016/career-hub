import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Job from './Job';

const FeatureJobs = () => {
    const [jobs,setJobs] = useState([]);
    useEffect(()=>{
        fetch('jobs.json')
        .then(res=>res.json())
        .then(data=>setJobs(data));
    })
    return (
        <div>
            <div className='text-center'>
            <h2 className='text-5xl font-extrabold'>Featured Jobs</h2>
            <p className='text-base text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-6'>
                {
                    jobs.map(job => <Job
                    key={job.id}
                    job={job}
                    ></Job>)
                }
            </div>
        </div>
    );
};

export default FeatureJobs;