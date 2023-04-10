import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import currencyIcon from '../../public/Logo/currency.png';
import titleIcon from '../../public/Logo/title.png';
import phoneIcon from '../../public/Logo/phone.png';
import emailIcon from '../../public/Logo/email.png';
import locationIcon from '../../public/Logo/location.png';

const JobDetails = () => {
    const {jobId} = useParams();
    const jobs = useLoaderData();
    const addedProduct = jobs.find(job => job.id === jobId)
    const {job_description, job_responsibility,experiences,educational_requirements,job_title,salary,contact_information,location} = addedProduct;
    console.log(contact_information)
    console.log(addedProduct)
    return (
        <div>
            <div className='flex items-center justify-center w-full h-40'>
                <h4>Job Details</h4>
            </div>
            <div className='flex justify-between mb-8'>
            <div>
            <h2 className='mb-5'><span className='font-extrabold'>Job Description:</span> <span className='font-medium text-slate-500'>{job_description}</span></h2>
            <h2 className='mb-5'><span className='font-extrabold'>Job Responsibility:</span> <span className='font-medium text-slate-500'>{job_responsibility}</span></h2>
            <h4 className='font-extrabold mb-5'>Educational Requirments:</h4> 
            <p className='font-medium text-slate-500 mb-5'>{educational_requirements}</p>
            <h4 className='font-extrabold mb-5'>Experiences:</h4> 
            <p className='font-medium text-slate-500'>{experiences}</p>

            </div>
            <div className='bg-slate-200 p-4'>
                <h4 className='text-xl font-extrabold mb-12'>Job Details</h4><hr />
                <div className='flex gap-2 mb-4'>
                    <img src={currencyIcon} alt="" />
                    <p><span className='text-xl font-bold'>Salary:</span> <span className='text-xl font-medium text-slate-500'>{salary} (Per Month)</span></p>
                </div>
                <div className='flex gap-2 mb-8'>
                    <img src={titleIcon} alt="" />
                    <p><span className='text-xl font-bold'>Job Title:</span> <span className='text-xl font-medium text-slate-500'>{job_title}</span></p>
                </div>
                <h4 className='text-xl font-extrabold mb-12'>Contact Information</h4>
                <div className='flex gap-2 mb-4'>
                <img src={phoneIcon} alt="" />
                    <p><span className='text-xl font-bold'>Phone:</span> <span className='text-xl font-medium text-slate-500'>{contact_information.phone}</span></p>
                </div>
                <div className='flex gap-2 mb-4'>
                <img src={emailIcon} alt="" />
                    <p><span className='text-xl font-bold'>Email:</span> <span className='text-xl font-medium text-slate-500'>{contact_information.email}</span></p>
                </div>
                <div className='flex gap-2 mb-4'>
                <img src={locationIcon} alt="" />
                <p><span className='text-xl font-bold'>Address:</span> <span className='text-xl font-medium text-slate-500'>{location}</span></p>
                </div>
                

        <div className='relative mt-12'>
        <Link to='/appliedJobs'><button onClick={()=> handleAppliedJob(id)} className='absolute -bottom-4 w-[100%] border rounded-md px-2 py-1 text-white bg-blue-500'>Apply Now</button></Link>
        </div>
            </div>

        </div>
        </div>
    );
};

export default JobDetails;