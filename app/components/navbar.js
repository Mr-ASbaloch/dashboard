import Image from 'next/image';
import logo from '../assets/images/logo.png'

const Navbar = () => {
    return (
        <nav className="relative flex bg-[#FFFFFF] justify-between sm:h-10  items-center  py-9 px-16 shadow-md overflow-hidden z-50 ">
            <div className="">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="" aria-label="Home">
                        <Image
                            src={logo}
                            height={80}
                            width={140}
                        />
                    </a>
                    <p className=' text-black font-semibold justify-center mx-auto'>DashBoard</p>
                    <div className="-mr-2 flex items-center md:hidden">
                        <button
                            type="button"
                            id="main-menu"
                            aria-label="Main menu"
                            aria-haspopup="true"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                        >
                            <svg
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
         
            <div className="hidden  md:flex md:items-center  ">
                <span className="inline-flex">
                    <a
                        href="/login"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-blue-600 hover:text-blue-500 focus:outline-none transition duration-150 ease-in-out"
                    >
                        Login
                    </a>
                </span>
                <span className="inline-flex rounded-md shadow ml-2">
                    <a
                        href="/signup"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 transition duration-150 ease-in-out"
                    >
                        Get started
                    </a>
                </span>
            </div>
        </nav>

    );
};

export default Navbar;
