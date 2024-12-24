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
        <div className='fixed top-0 left-0 w-full bg-white flex items-center justify-between md:px-20 px-5 py-4 shadow-sm z-10'>
            {/* Navigation Links */}
            <ul className='hidden md:flex items-center gap-10'>
                <li>
                    <Link
                        className={`font-semibold hover:bg-slate-200 hover:text-primary py-3 px-5 rounded-full ${isActive('/itravel') ? 'bg-primary text-white ' : 'text-black'}`}
                        href={'/itravel'}
                    >
                        I travel
                    </Link>
                </li>
                <li>
                    <Link
                        className={`font-semibold hover:bg-slate-200 hover:text-primary py-3 px-5 rounded-full ${isActive('/s') ? 'bg-primary text-white ' : 'text-black'}`}
                        href={'/send'}
                    >
                        I send
                    </Link>
                </li>
                <li>
                    <Link
                        className={`font-semibold hover:bg-slate-200 hover:text-primary py-3 px-5 rounded-full ${isActive('/d') ? 'bg-primary text-white ' : 'text-black'}`}
                        href={'/shop'}
                    >
                        I shop
                    </Link>
                </li>
            </ul>

            {/* Logo Section */}
            <Link href={'/'} className='w-[100px] md:w-[200px] hidden md:block cursor-pointer'>

                <Image
                    src="/Images/logo.svg"
                    alt="Company Logo"
                    width={200}
                    height={100}
                    layout="responsive"
                />
            </Link>

            {/* User Icon Section */}
            <div className=' cursor-pointer flex items-center gap-3'>
                <Link href={'/ourconcept'} className='bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] px-10 min-w-48 py-3 rounded-md font-semibold text-primary border-[1px]'>Our Concept</Link>
                <Image
                    src="/Images/header-user.svg"
                    alt="User Icon"
                    width={1200}
                    height={800}
                    layout="responsive"
                />
            </div>

            <div className='  md:hidden cursor-pointer flex items-center gap-3'>
                <Link href={'/ourconcept'} className='bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] py-3 px-10 min-w-48 rounded-md font-semibold text-primary border-[1px]'>Our Concept</Link>
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
                            className={`block text-black font-semibold py-2 px-4 ${isActive('/itravel') ? 'bg-primary text-white' : ''}`}
                            href={'/itravel'}
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
