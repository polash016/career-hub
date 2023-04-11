import React, { useEffect, useState } from 'react';
import { getShoppingCart } from '../utilities/fakedb';

const AppliedJobs = () => {
    const added = getShoppingCart();
    console.log(added)
    return (
        <div>
            <div className='flex items-center justify-center w-full h-40'>
                <h4>Applied Jobs</h4>
            </div>
        </div>
    );
};

export default AppliedJobs;