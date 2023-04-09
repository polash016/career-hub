import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from './Catagory';

const JobCatagory = () => {
    const jobCatagory = useLoaderData();
    return (
        <div>
            <div className='text-center'>
            <h1>Job Catagory List</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
            {
                jobCatagory.map(catagory => <Catagory 
                key={catagory.id}
                catagory={catagory}
                ></Catagory>)
            }
            </div>
        </div>
    );
};

export default JobCatagory;