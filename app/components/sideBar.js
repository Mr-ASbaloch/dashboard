// import { FaHome, FaUtensils, FaTruck, FaBox, FaShoppingCart, FaCog } from 'react-icons/fa';

// const Sidebar = () => {
//   return (
//     <div className="  bg-white text-black p-4 shadow-md ">
//       <ul className="space-y-6">
//         <li className="flex items-center w-36 bg-[#D4041C] py-2 rounded-md px-2 space-x-2 text-white cursor-pointer">
//           <FaHome />
//           <span>Dashboard</span>
//         </li>
//         <li className="flex items-center w-36 py-2 rounded-md px-2 space-x-2 hover:bg-[#D4041C] hover:text-white cursor-pointer">
//           <FaUtensils />
//           <span>Restaurants</span>
//         </li>
//         <li className="flex items-center w-36 py-2 rounded-md px-2 space-x-2 hover:bg-[#D4041C] hover:text-white cursor-pointer">
//           <FaTruck />
//           <span>Suppliers</span>
//         </li>
//         <li className="flex items-center w-36 py-2 rounded-md px-2 space-x-2 hover:bg-[#D4041C] hover:text-white cursor-pointer">
//           <FaBox />
//           <span>Products</span>
//         </li>
//         <li className="flex items-center w-36 py-2 rounded-md px-2 space-x-2 hover:bg-[#D4041C] hover:text-white cursor-pointer">
//           <FaShoppingCart />
//           <span>Orders</span>
//         </li>
//         <li className="flex items-center w-36 py-2 rounded-md px-2 space-x-2 hover:bg-[#D4041C] hover:text-white cursor-pointer">
//           <FaCog />
//           <span>Settings</span>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;

"use client";
import {
  FaHome,
  FaUtensils,
  FaTruck,
  FaBox,
  FaShoppingCart,
  FaCog,
} from "react-icons/fa";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: FaHome },
    { name: "Restaurants", icon: FaUtensils },
    { name: "Suppliers", icon: FaTruck },
    { name: "Products", icon: FaBox },
    { name: "Orders", icon: FaShoppingCart },
    { name: "Settings", icon: FaCog },
  ];

  return (
    <div className="hidden lg:flex flex-col bg-gray-800 text-white w-64 min-h-screen shadow-lg">
      <div className="flex items-center justify-center h-20 shadow-md">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
      </div>
      <ul className="flex flex-col mt-4 space-y-2">
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => setActive(item.name)}
            className={`flex items-center w-full px-4 py-3 space-x-3 cursor-pointer ${
              active === item.name
                ? "bg-red-500 text-white"
                : "text-gray-400 hover:bg-red-500 hover:text-white"
            }`}
          >
            <item.icon />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
