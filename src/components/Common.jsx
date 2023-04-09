import React from 'react';
import Header from './Header';
import JobCatagory from './JobCatagory';
import FeatureJobs from './FeatureJobs';

const Common = () => {
    return (
        <div>
            <Header></Header>
            <JobCatagory></JobCatagory>
            <FeatureJobs></FeatureJobs>
        </div>
    );
};

export default Common;