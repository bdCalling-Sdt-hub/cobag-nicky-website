'use client'; // Ensure this is a client-side component

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";


const Header = () => {
    const [currentPath, setCurrentPath] = useState('');
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

    useEffect(() => {
        // Set the current path when the component mounts (client-side)
        setCurrentPath(window.location.pathname);
    }, []); // This will run only once after the component mounts

    // Function to check if a link is active
    const isActive = (path) => currentPath === path;

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    return (
        <div className='fixed top-0 left-0 w-full bg-white flex items-center justify-between md:px-20 px-5 py-4 shadow-lg z-10'>
            {/* Navigation Links */}
            <ul className='hidden md:flex items-center gap-10'>
                <li>
                    <Link
                        className={`font-semibold ${isActive('/') ? 'bg-primary text-white py-2 px-3 rounded-full' : 'text-black'}`}
                        href={'/'}
                    >
                        I travel
                    </Link>
                </li>
                <li>
                    <Link
                        className={`font-semibold ${isActive('/send') ? 'text-blue-500' : 'text-black'}`}
                        href={'/send'}
                    >
                        I send
                    </Link>
                </li>
                <li>
                    <Link
                        className={`font-semibold ${isActive('/shop') ? 'text-blue-500' : 'text-black'}`}
                        href={'/shop'}
                    >
                        I shop
                    </Link>
                </li>
            </ul>

            {/* Logo Section */}
            <div className='w-[100px] md:w-[200px] hidden md:block cursor-pointer'>
                <Image
                    src="/Images/logo.svg"
                    alt="Company Logo"
                    width={200}
                    height={100}
                    layout="responsive"
                />
            </div>

            {/* User Icon Section */}
            <div className='md:w-14 w-10 cursor-pointer'>
                <Image
                    src="/Images/header-user.svg"
                    alt="User Icon"
                    width={1200}
                    height={800}
                    layout="responsive"
                />
            </div>

            <div className='w-[100px] md:w-[200px] block md:hidden cursor-pointer'>
                <Image
                    src="/Images/logo.svg"
                    alt="Company Logo"
                    width={200}
                    height={100}
                    layout="responsive"
                />
            </div>

            {/* Mobile Navigation Button */}
            <div className='md:hidden flex items-center'>
                <button onClick={toggleMenu} className="p-2 border rounded-full text-black">
                    {
                        !isMenuOpen ?
                            <IoMenu className='text-3xl' />
                            :
                            <RxCross2 className='text-3xl' />
                    }
                </button>
            </div>

            {/* Mobile Menu (only visible if isMenuOpen is true) */}
            <div
                className={`md:hidden absolute top-20 right-0 w-[80%] bg-white shadow-lg py-4 transition-transform duration-300 ${isMenuOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}
                style={{ height: '100vh' }}
            >
                <ul>
                    <li>
                        <Link
                            className={`block text-black font-semibold py-2 px-4 ${isActive('/') ? 'bg-primary text-white' : ''}`}
                            href={'/'}
                        >
                            I travel
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`block text-black font-semibold py-2 px-4 ${isActive('/send') ? 'bg-primary text-white' : ''}`}
                            href={'/send'}
                        >
                            I send
                        </Link>
                    </li>
                    <li>
                        <Link
                            className={`block text-black font-semibold py-2 px-4 ${isActive('/shop') ? 'bg-primary text-white' : ''}`}
                            href={'/shop'}
                        >
                            I shop
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
