import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quizs = useLoaderData();
    console.log(quizs);
    return (
        <div>

        </div>
    );
};

export default Quiz;