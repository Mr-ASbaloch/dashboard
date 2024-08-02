
import React from 'react';
import Sidebar from '../components/sideBar';
import DashBoard from './index';

const Layout = ({ children }) => {
    return (
        <div className="container">
            <div className="sidebar">
                {/* Sidebar content goes here */}
                <Sidebar/>
            </div>
            <div className="dashboard">
                {/* Dashboard content goes here */}
                <DashBoard/>
            </div>
            <style jsx>{`
                .container {
                    display: flex;
                    height: 100vh;
                }
                .sidebar {
                    width: 20%;
                    background-color: #f0f0f0;
                    padding: 20px;
                    height: 100vh;   
                }
                .dashboard {
                    flex: 1;
                    padding: 20px;
                }
            `}</style>
        </div>
    );
};

export default Layout;