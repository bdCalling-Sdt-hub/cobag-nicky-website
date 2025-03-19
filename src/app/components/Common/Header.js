'use client'; // Ensure this is a client-side component
import baseUrl from '@/app/redux/api/baseUrl';
import { useGetUserQuery } from '@/app/redux/Features/Auth/getUser';
import i18n from '@/app/utils/i18';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaArrowRight, FaChevronRight } from 'react-icons/fa6';
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Header = () => {

    const { data, isLoading: userLoading } = useGetUserQuery();

    console.log(data?.user?.profileImage);
    console.log(baseUrl + data?.user?.profileImage);



    const { t } = i18n;

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



    console.log(baseUrl + '' + data?.user?.profileImage);

    return (
        <header className="fixed top-0 py-2 left-0 w-full bg-white flex items-center justify-between px-5 md:px-20  z-[99999] ">
            {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-5">
                <li>{t('navWhatdoWYouWantTo')}</li>
                <li className="relative group cursor-pointer">
                    <span className='font-semibold text-primary group-hover:bg-primary duration-500 group-hover:text-white flex items-center gap-5 py-3 px-5 rounded-full navbar-item-hover z-[9999]'>
                        <FaChevronRight className='group-hover:hidden text-white z-[9999] ' />
                        <FaArrowRight className='hidden group-hover:block text-white z-[9999] ' />
                        {t('Discoverourservices')}
                    </span>
                    <ul className="absolute hidden group-hover:block top-12 left-0 bg-white shadow-md rounded-md min-w-96">

                        <li >
                            <Link
                                className={`font-medium hover:font-semibold hover:bg-slate-200 min-w-48 hover:text-primary py-3 px-5 block `}
                                href={'/itravel'}
                            >
                                {/* I want to travel abroad */}
                                {t('NavbarItem1')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`font-medium hover:font-semibold hover:bg-slate-200 min-w-48 hover:text-primary py-3 px-5 block `}
                                href={'/isend'}
                            >
                                {t('NavbarItem2')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`font-medium hover:font-semibold hover:bg-slate-200 min-w-48 hover:text-primary py-3 px-5 block `}
                                href={'/ishop'}
                            >
                                {t('NavbarItem3')}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={`font-medium hover:font-semibold hover:bg-slate-200 min-w-48 hover:text-primary py-3 px-5 block `}
                                href={'/isend'}
                            >
                                {t('NavbarItem4')}
                            </Link>
                        </li>

                    </ul>
                </li>
            </ul>
            {/* Logo Section (Always Visible) */}
            <Link href={'/'} className="w-[100px] md:w-[150px] block cursor-pointer">
                <Image
                    src="/Images/NewSection/cobag-logo.png"
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
                    {t('NavCommission')}
                </Link>


                {
                    !data?.user && <Link href={'/login'}>
                        <button className='bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] px-6 py-3 rounded-full font-semibold text-primary border'>{t('NavLogin')}</button>
                    </Link>
                }

                {/* when user is available then show it else not */}

                {
                    data?.user && <div className="relative group cursor-pointer">


                        <img className='w-16 h-16 rounded-full border-4 border-[#161d6f]' src={data?.user?.profileImage ? baseUrl + data?.user?.profileImage : 'https://res.cloudinary.com/nerob/image/upload/v1736698546/ForBdcolling/uuovt73ylqcnaizimunk.png'} alt="" />

                        <div className=" bg-slate-100 p-2 rounded-lg absolute sm:top-16 sm:right-0 -right-20 min-w-72 hidden group-hover:block">
                            <Link
                                href={'/dashboard/profile'}
                                className="border-2 text-center block my-3 w-full hover:bg-[#161d6f] hover:text-white duration-300 border-[#161d6f] rounded-full px-10 py-2 text-[#161d6f]"
                            >
                                {t('NavProfile')}
                            </Link>
                            <button
                                className="border-2 text-center block my-3 w-full hover:bg-[#161d6f] hover:text-white duration-300 border-[#161d6f] rounded-full px-10 py-2 text-[#161d6f]"
                            >
                                Switch to Sender
                            </button>
                        </div>
                    </div>
                }


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
                className={`md:hidden absolute top-24 right-0 w-full bg-white shadow-lg py-4 px-5 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                style={{ height: '100vh' }}
            >
                <ul className="space-y-4">
                    {[
                        { path: '/itravel', label: 'I want to sell my kilos' },
                        { path: '/isend', label: 'I want to send a parcel' },
                        { path: '/ishop', label: 'I want to have my excess baggage transported' },
                        { path: '/isend', label: 'I want to buy abroad' }  // Updated unique path
                    ].map((item, index) => (
                        <li key={index}>
                            <Link
                                className={`font-medium hover:font-semibold hover:bg-slate-200 min-w-48 hover:text-primary py-3 px-5 block ${isActive(item.path) ? '' : 'text-black'}`}
                                href={item.path}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile User Section */}
                <div className="mt-10 flex flex-col items-center gap-3">
                    <Link
                        href={'/commission'}
                        onClick={() => setIsMenuOpen(false)}
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
