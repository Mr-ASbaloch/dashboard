import { FaHome, FaUtensils, FaTruck, FaBox, FaShoppingCart, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="  bg-white text-black p-4 shadow-md">
      <ul className="space-y-6">
        <li className="flex items-center w-36 bg-[#D4041C] py-2 rounded-md px-2 space-x-2 text-white cursor-pointer">
          <FaHome />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center w-36 py-2 rounded-md px-2 space-x-2 hover:bg-[#D4041C] hover:text-white cursor-pointer">
          <FaUtensils />
          <span>Restaurants</span>
        </li>
        <li className="flex items-center w-36 py-2 rounded-md px-2 space-x-2 hover:bg-[#D4041C] hover:text-white cursor-pointer">
          <FaTruck />
          <span>Suppliers</span>
        </li>
        <li className="flex items-center w-36 py-2 rounded-md px-2 space-x-2 hover:bg-[#D4041C] hover:text-white cursor-pointer">
          <FaBox />
          <span>Products</span>
        </li>
        <li className="flex items-center w-36 py-2 rounded-md px-2 space-x-2 hover:bg-[#D4041C] hover:text-white cursor-pointer">
          <FaShoppingCart />
          <span>Orders</span>
        </li>
        <li className="flex items-center w-36 py-2 rounded-md px-2 space-x-2 hover:bg-[#D4041C] hover:text-white cursor-pointer">
          <FaCog />
          <span>Settings</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
