import React from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard from '../Pages/Shared/Dashboard/Dashboard';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Dashboard>
            <Outlet></Outlet>
            </Dashboard>
            <Footer></Footer>
        </div>
    );
};

export default Main;