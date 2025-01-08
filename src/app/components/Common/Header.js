'use client'; // Ensure this is a client-side component

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control menu visibility

    const pathname = usePathname(); // Get the current route path

    // Function to check if a link is active
    const isActive = (path) => {
        // Normalize both the current path and link path for accurate matching
        return pathname === path || pathname?.startsWith(path);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu state
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white flex items-center justify-between px-5 md:px-20 py-6 z-[99999]">
            {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-5">
                {['/itravel', '/isend', '/ishop'].map((path, index) => (
                    <li key={index}>
                        <Link
                            className={`font-semibold hover:bg-slate-200 hover:text-primary py-3 px-5 rounded-full ${isActive(path) ? 'bg-primary text-white' : 'text-black'
                                }`}
                            href={path}
                        >
                            {path === '/itravel' ? 'I sell my kilos' : path === '/isend' ? 'I send a package' : 'I shop worldwilde'}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Logo Section (Always Visible) */}
            <Link href={'/'} className="w-[100px] md:w-[150px] block cursor-pointer">
                <Image
                    src="/Images/logo.svg"
                    alt="Company Logo"
                    width={150}
                    height={75}
                    layout="responsive"
                />
            </Link>

            {/* User Icon Section (Always Visible) */}
            <div className="flex items-center gap-3">
                <Link
                    href={'/commission'}
                    className="hidden md:block bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] px-6 py-3 rounded-full font-semibold text-primary border"
                >
                    0% Commission
                </Link>

                <Link href={'/'}>
                    <button  className='bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] px-6 py-3 rounded-full font-semibold text-primary border'>Subscribe</button>
                </Link>
                <Link href={'/dashboard/profile'}>
                    <Image
                        src="/Images/header-user.svg"
                        alt="User Icon"
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                </Link>

            </div>

            {/* Mobile Navigation Button */}
            <button
                onClick={toggleMenu}
                className="p-2 border rounded-full text-black md:hidden"
            >
                {!isMenuOpen ? <IoMenu className="md:text-3xl text-xl" /> : <RxCross2 className="md:text-3xl text-xl" />}
            </button>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-20 right-0 w-full bg-white shadow-lg py-4 px-5 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ height: '100vh' }}
            >
                <ul className="space-y-4">
                    {['/itravel', '/isend', '/ishop'].map((path, index) => (
                        <li key={index}>
                            <Link
                                className={`block font-semibold py-2 px-4 rounded-md ${isActive(path) ? 'bg-primary text-white' : 'text-black'
                                    }`}
                                href={path}
                                onClick={() => setIsMenuOpen(false)} // Close menu on link click
                            >
                                {path === '/itravel' ? 'I sell my kilos' : path === '/isend' ? 'I send' : 'I shop'}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile User Section */}
                <div className="mt-10 flex flex-col items-center gap-3">
                    <Link
                        href={'/commission'}
                        className="bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] w-full text-center py-2 rounded-md font-semibold text-primary border"
                    >
                         0% Commission
                    </Link>
                    
                    {/* <Image
                        src="/Images/header-user.svg"
                        alt="User Icon"
                        width={40}
                        height={40}
                        className="rounded-full"
                    /> */}
                </div>
            </div>
        </header>
    );
};

export default Header;
