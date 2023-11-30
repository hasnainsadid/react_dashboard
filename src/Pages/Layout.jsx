import React from 'react';
import Footer from '../Components/Footer';
import Topbar from '../Components/Topbar';
import Sidebar from '../Components/Sidebar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <div id="wrapper">
                <Sidebar />
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                        <Outlet />
                    </div>
                    <Footer />
                </div>
            </div>

            

        </>
    );
};

export default Layout;