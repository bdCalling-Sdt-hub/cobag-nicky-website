'use client';
import baseUrl from '@/app/redux/api/baseUrl';
import { useGetUserQuery } from '@/app/redux/Features/Auth/getUser';
import { useGetChatsQuery } from '@/app/redux/Features/message/getMessage';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { LuMessageSquareText } from 'react-icons/lu';
import ChatListCard from '../../message/ChatListCard';

const Header = () => {


    const { data: responseChatData } = useGetChatsQuery();
    const allChats = responseChatData?.data?.results;
    console.log(allChats);

    const { data } = useGetUserQuery();

    console.log(data?.user?.firstName);


    const [isNotification, setIsNotification] = useState(false);

    const handleNotificationShowHide = () => {
        setIsNotification(!isNotification);
    }

    const [isMessage, setIsMessage] = useState(false);

    const handleMessageShowHide = () => {
        setIsMessage(!isMessage);
    }

    return (
        <div className='p-5 bg-white flex justify-between items-center gap-3 relative'>
            <h1 className='text-2xl font-bold text-primary'>Dashboard</h1>
            <div className='flex items-center gap-5'>
                <div onClick={() => setIsNotification(false)}>
                    <div onClick={handleMessageShowHide} className='relative cursor-pointer'>
                        <LuMessageSquareText className='text-4xl text-primary' />
                        {/* <span className='w-5 h-5 bg-red-600 rounded-full absolute -top-2 -right-2 text-white flex items-center justify-center text-xs'>1</span> */}
                    </div>
                </div>

                <div onClick={() => setIsMessage(false)}>
                    <div onClick={handleNotificationShowHide} className='relative cursor-pointer'>
                        <IoMdNotificationsOutline className='text-4xl text-primary' />
                        {/* <span className='w-5 h-5 bg-red-600 rounded-full absolute -top-1 -right-1 text-white flex items-center justify-center text-xs'>1</span> */}
                    </div>
                </div>

                <Link href={"/dashboard/profile"} className='flex items-center gap-2 cursor-pointer'>


                    <img className='w-16 h-16 rounded-full border-4 border-[#161d6f]' src={data?.user?.profileImage ? baseUrl + data?.user?.profileImage : 'https://res.cloudinary.com/nerob/image/upload/v1736698546/ForBdcolling/uuovt73ylqcnaizimunk.png'} alt="" />


                    <h2 className='font-semibold capitalize'>{data?.user?.firstName}</h2>
                </Link>
            </div>


            {
                isNotification &&
                <div className='absolute top-24 right-5 bg-white shadow-lg w-96 z-50'>
                    <div className='flex justify-between items-center p-5'>
                        <h3 className='font-bold text-primary'>Notifications</h3>
                        <p onClick={handleNotificationShowHide} className='text-primary cursor-pointer'>Mark all as read</p>
                    </div>
                    <div>
                        {
                            [...Array(5)].map((_, index) => (
                                <div key={index} onClick={handleNotificationShowHide} className='flex justify-between cursor-pointer  p-5 hover:bg-gray-200'>
                                    <div className='flex items-center gap-3'>
                                        <img className='w-10 rounded-full' src="/Images/Isend/availableRoutesUser.png" alt="" />
                                        <div>
                                            <p className='font-semibold'>John Doe</p>
                                            <p className='text-sm'>CoBag new Order comming ...</p>
                                        </div>
                                    </div>
                                    <p className='text-primary cursor-pointer'>10/05/2024</p>
                                </div>
                            ))
                        }

                        <div className='flex justify-between cursor-pointer  p-5 hover:bg-gray-200'>
                            <div className='flex items-center gap-3'>
                                <img className='w-10 rounded-full' src="/Images/Isend/availableRoutesUser.png" alt="" />
                                <div>
                                    <p className='font-semibold'>John Doe</p>
                                    <p>sent you a message</p>
                                </div>
                            </div>
                            <p className='text-primary cursor-pointer'>10/05/2024</p>
                        </div>
                    </div>
                </div>
            }



            {
                isMessage &&
                <div className='absolute top-24 right-5 bg-white shadow-lg w-96 z-50'>
                    <div className='flex justify-between items-center p-5'>
                        <h3 className='font-bold text-primary'>Messages</h3>
                        {/* <p onClick={handleMessageShowHide} className='text-primary cursor-pointer'>Mark all as read</p> */}
                    </div>
                    <div>
                        {
                            allChats?.map((chat) => <ChatListCard key={chat._id} chat={chat} />)
                        }

                    </div>
                </div>
            }



        </div>
    );
}

export default Header;
