import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Layouts = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Layouts;