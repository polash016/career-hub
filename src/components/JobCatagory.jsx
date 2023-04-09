import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Catagory from './Catagory';

const JobCatagory = () => {
    const jobCatagory = useLoaderData();
    return (
        <div>
            <div className='text-center'>
            <h1 className='font-extrabold text-5xl mb-4'>Job Catagory List</h1>
            <p className='text-base text-slate-600'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 mt-8 mb-8'>
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