import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import { Toaster } from 'react-hot-toast';

const Home = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <Toaster />
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;