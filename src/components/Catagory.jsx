import React from 'react';

const Catagory = ({catagory}) => {
    const {logo, name,availableJob} = catagory;
    return (
        <div className=' rounded-lg bg-slate-50 p-8 '>
            <img className='border rounded-lg p-2 border-slate-200 bg-slate-100 mb-6' src={logo} alt="" />
            <h4 className='text-sm font-extrabold mb-2'>{name}</h4>
            <p className='text-slate-500'>{availableJob}</p>
        </div>
    );
};

export default Catagory;