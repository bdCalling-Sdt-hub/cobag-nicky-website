'use client'; // Ensure this is a client-side component
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { CiCreditCard1, CiSettings, CiSquareQuestion, CiUser } from 'react-icons/ci';
import { IoIosArrowDown, IoIosLogOut } from 'react-icons/io';
import { LuUserRound, LuWallet } from 'react-icons/lu';
import { GrDocumentText, GrUserSettings } from "react-icons/gr";
import { MdLogout, MdOutlineSettingsSuggest, MdTimeline } from 'react-icons/md';
import { RiSettingsFill } from 'react-icons/ri';
import { FaBusinessTime, FaRegUser } from 'react-icons/fa6';
import { GoCreditCard, GoQuestion } from 'react-icons/go';
import { FiMessageSquare } from 'react-icons/fi';
import { Button, message, Modal } from 'antd';
import { RxCross2 } from 'react-icons/rx';
import { LiaBusinessTimeSolid, LiaOpencart } from "react-icons/lia";
import i18n from '@/app/utils/i18';



const Sidebar = ({ setIsSidebarOpen }) => {
    const { t } = i18n;
    const pathname = usePathname(); // Get the current route

    const navigate = useRouter();

    // Function to check if the link is active
    const isActive = (path) => pathname === path;

    const [showSubmenu, setShowSubmenu] = useState(false);
    const showProfileSubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };


    const [showWallet, setShowWallet] = useState(false);
    const showWalletSubmenu = () => {
        setShowWallet(!showWallet);
    };


    //============== Reservations ===============

    const [showReservations, setShowReservations] = useState(false);
    const showReservationsSubmenu = () => {
        setShowReservations(!showReservations);
    };


    //============== Settings ==============

    const [showSettings, setShowSettings] = useState(false);
    const showSettingsSubmenu = () => {
        setShowSettings(!showSettings);
    };

    // ============== Support ===============

    const [showSupport, setShowSupport] = useState(false);
    const showSupportSubmenu = () => {
        setShowSupport(!showSupport);
    };

    //===================== logout modal ================
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleLogout = () => {
        
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        message.success('Logout successful.');


        navigate.push('/login');
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        message.error('Logout canceled.');
    };

    const hadnleHideSidebar = () => {
        setIsSidebarOpen(false);
    };


    return (
        <div>
            <div className='fixed top-0 left-0 w-72 h-screen overflow-y-auto bg-white p-5 '>
                <div onClick={hadnleHideSidebar} className='absolute top-5 right-5 cursor-pointer md:hidden block'>
                    <RxCross2 className='text-2xl' />
                </div>
                <div>
                    <Link href={'/'}> <img className="w-40 mx-auto" src="/Images/Profile/black_logo.png" alt="Logo" /></Link>
                </div>
                
                <div className="my-20 ">
                    <div className='my-5'>
                        <div
                            onClick={showProfileSubmenu}
                            className={`flex items-center cursor-pointer justify-between gap-3 py-3 px-5 rounded-md font-semibold ${isActive('/dashboard/profile') ? 'bg-primary text-white ' : 'hover:bg-slate-200 bg-stone-100 hover:text-primary text-black  '
                                }`}
                        >
                            <div className='flex items-center gap-3'><LuUserRound className="text-2xl" /> {t('myProfile')}</div> <IoIosArrowDown />


                        </div>
                        {
                            showSubmenu && (
                                <div className="bg-white py-3  rounded-md">
                                    <Link onClick={hadnleHideSidebar} className='py-2 w-full hover:bg-slate-100 text-gray-500 px-3 rounded font-semibold flex items-center gap-2' href={'/dashboard/profile'}><FaRegUser className='text-xl' /> {t('profileInfo')}</Link>
                                    <Link onClick={hadnleHideSidebar} className='py-2 w-full hover:bg-slate-100 text-gray-500 px-3 rounded font-semibold flex items-center gap-2' href={'/dashboard/profile#documents'}><GrDocumentText className='text-xl' /> {t('documents')}</Link>
                                    {/* <Link className='block py-2 w-full hover:bg-slate-100 px-3 rounded font-semibold' href={'/dashboard/profile'}>Edit</Link>
                                <Link className='block py-2 w-full hover:bg-slate-100 px-3 rounded font-semibold' href={'/dashboard/profile'}>Edit</Link>
                                <Link className='block py-2 w-full hover:bg-slate-100 px-3 rounded font-semibold' href={'/dashboard/profile'}>Edit</Link> */}
                                </div>
                            )
                        }

                    </div>

                    <div className='my-5'>
                        <div
                            onClick={showWalletSubmenu}
                            className={`flex items-center cursor-pointer justify-between gap-3 py-3 px-5 rounded-md font-semibold ${isActive('/dashboard/wallet') ? 'bg-primary text-white ' : 'hover:bg-slate-200 bg-stone-100 hover:text-primary text-black  '
                                }`}
                        >
                            <div className='flex items-center gap-3'> <LuWallet className="text-2xl" /> {t('wallet')} </div> <IoIosArrowDown />


                        </div>
                        {
                            showWallet && (
                                <div className="bg-white py-3  rounded-md">

                                    <Link onClick={hadnleHideSidebar} className=' py-2 w-full hover:bg-slate-100 text-gray-500 px-3 rounded font-semibold flex items-center gap-2' href={'/dashboard/wallet#waletBalance'}><GoCreditCard className="text-xl" /> {t('bankCard')}</Link>
                                    <Link onClick={hadnleHideSidebar} className=' py-2 w-full hover:bg-slate-100 text-gray-500 px-3 rounded font-semibold flex items-center gap-2' href={'/dashboard/wallet#transaction'}><MdTimeline className="text-xl" /> {t('transaction')}</Link>

                                </div>
                            )
                        }

                    </div>

                    <div className='my-5'>
                        <Link href={'/dashboard/reservation'}
                            onClick={showReservationsSubmenu}

                        >
                            <span

                                className={`flex items-center cursor-pointer gap-5 blcok w-full p-3 px-5  rounded-md font-semibold ${isActive('/dashboard/reservation') ? 'bg-primary text-white ' : 'hover:bg-slate-200 bg-stone-100 hover:text-primary text-black  '
                                    }`}
                                onClick={hadnleHideSidebar}> <div className='flex items-center gap-3'> <LiaBusinessTimeSolid className="text-2xl" /> {t('reservations')} </div></span>
                            {/* <IoIosArrowDown /> */}

                        </Link>

                        {/* {
                        showReservations && (
                            <div className="bg-white py-3  rounded-md">
                                <Link className=' py-2 w-full hover:bg-slate-100 text-gray-500 px-3 rounded font-semibold flex items-center gap-2' href={'/dashboard/wallet'}><LuWallet className="text-xl" /> Reservations</Link>
                                <Link className=' py-2 w-full hover:bg-slate-100 text-gray-500 px-3 rounded font-semibold flex items-center gap-2' href={'#bankCard'}><CiCreditCard1 className="text-xl" /> Bank Card</Link>

                            </div>
                        )
                    } */}

                    </div>
                    <div className='my-5'>
                        <Link href={'/dashboard/runingorder'}
                            onClick={showReservationsSubmenu}

                        >
                            <span

                                className={`flex items-center cursor-pointer gap-5 blcok w-full p-3 px-5  rounded-md font-semibold ${isActive('/dashboard/runingorder') ? 'bg-primary text-white ' : 'hover:bg-slate-200 bg-stone-100 hover:text-primary text-black  '
                                    }`}
                                onClick={hadnleHideSidebar}> <div className='flex items-center gap-3'> <LiaOpencart className="text-2xl" />{t('runningOrder')}</div></span>
                        </Link>
                    </div>


                    <div className='my-5'>
                        <div
                            onClick={showSettingsSubmenu}
                            className={`flex items-center cursor-pointer justify-between gap-3 py-3 px-5 rounded-md font-semibold ${isActive('/dashboard/settings') ? 'bg-primary text-white ' : 'hover:bg-slate-200 bg-stone-100 hover:text-primary text-black  '
                                }`}
                        >
                            <div className='flex items-center gap-3'><CiSettings className="text-2xl" /> {t('settings')} </div> <IoIosArrowDown />


                        </div>
                        {
                            showSettings && (
                                <div className="bg-white py-3  rounded-md">
                                    <Link onClick={hadnleHideSidebar} className=' py-2 w-full hover:bg-slate-100 text-gray-500 px-3 rounded font-semibold flex items-center gap-2' href={'/dashboard/settings'}><GrUserSettings className="text-xl" /> {t('account')}</Link>
                                </div>
                            )
                        }

                    </div>

                    <div className='my-5'>
                        <div
                            onClick={showSupportSubmenu}
                            className={`flex items-center cursor-pointer justify-between gap-3 py-3 px-5 rounded-md font-semibold ${isActive('/dashboard/support') ? 'bg-primary text-white ' : 'hover:bg-slate-200 bg-stone-100 hover:text-primary text-black  '
                                }`}
                        >
                            <div className='flex items-center gap-3'> <GoQuestion className="text-2xl" /> {t('support')} </div><IoIosArrowDown />


                        </div>
                        {
                            showSupport && (
                                <div className="bg-white py-3  rounded-md">
                                    <Link onClick={hadnleHideSidebar} className=' py-2 w-full hover:bg-slate-100 text-gray-500 px-3 rounded font-semibold flex items-center gap-2' href={'/dashboard/support'}><FiMessageSquare className="text-xl" /> {t('message')}</Link>
                                    <Link onClick={hadnleHideSidebar} className=' py-2 w-full hover:bg-slate-100 text-gray-500 px-3 rounded font-semibold flex items-center gap-2' href={'/dashboard/support#faq'}><CiSquareQuestion className="text-xl" /> FAQ </Link>

                                </div>
                            )
                        }

                    </div>
                </div>

                <button
                    className='text-red-600 absolute bottom-5 left-0 font-semibold w-full flex items-center gap-2 justify-center'
                    onClick={showModal}
                >
                    {t('logOut')} <IoIosLogOut className='text-xl' />
                </button>

                <Modal
                    open={isModalVisible}
                    onCancel={handleCancel}
                    closable={false}
                    footer={null}
                    className="custom-logout-modal min-w-[400px] my-32 flex items-center justify-center"
                >
                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-primary"> {t('logOut')}</h2>
                        <p className="text-gray-600 my-3">{t('areYousureForLogOut')}</p>
                        <div className="flex justify-center gap-4 mt-5">
                            <button onClick={handleCancel} className="bg-gray-200 text-gray-700 px-5 py-2 rounded-lg">
                                Cancel
                            </button>
                            <button onClick={handleLogout} className="bg-red-600 text-white px-5 py-2 rounded-lg">
                                Logout
                            </button>
                        </div>
                    </div>
                </Modal>

            </div>
        </div>
    );
};

export default Sidebar;
