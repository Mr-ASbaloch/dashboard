"use client";
import Sidebar from '../components/sideBar';
import Navbar from '../components/navbar';
import DashBoard from '../dashBoard';

const Layout = ({ children }) => {
    return (
       
     <>
     <Navbar/>
     <Sidebar/>
     <DashBoard/>
     {children}
     </>
    );
};

export default Layout;