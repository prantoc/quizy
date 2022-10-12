import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='mt-5 pt-5'>
            <h1 className='text-center text-white'>Woops! This route is not found</h1>
            <button className='btn btn-primary'><Link className='text-white' to="/"> Go Back To Home</Link></button>
        </div>
    );
};

export default Error;