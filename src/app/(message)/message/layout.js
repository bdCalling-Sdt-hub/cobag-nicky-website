'use client';
import AllChats from '@/app/components/message/AllChats';
import Head from 'next/head';
import { useState } from 'react';
import { BiCloset } from 'react-icons/bi';
import { LuMessageSquareMore } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';

export default function Layout({ children }) {
    const [isAllUserMessage, setIsAllUserMessage] = useState(false);
    const handleShowAllUserMessage = () => {
        setIsAllUserMessage(!isAllUserMessage);
    }
    return (
        <html lang="en">
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Message</title>
            </Head>
            <body>
                <div className='flex h-screen overflow-hidden'>
                    <div className={`${isAllUserMessage ? 'top-5' : 'top-20'} absolute  left-2 mr-2 z-50 xl:hidden block bg-white  rounded-md `}>
                        <button onClick={handleShowAllUserMessage} className='p-2'>
                            {
                                !isAllUserMessage ?
                                    <LuMessageSquareMore className='text-3xl text-primary' />
                                    :
                                    <RxCross2 className='text-3xl text-primary' />

                            }

                        </button>
                    </div>
                    <div className='xl:min-w-96 w-0 overflow-hidden border-r border-gray-400 overflow-y-scroll'>
                        <AllChats />
                    </div>
                    {
                        isAllUserMessage &&
                        <div className='min-w-96 pt-20 px-5 bg-gray-100 z-20 h-screen overflow-y-auto'>
                            <AllChats isAllUserMessage={isAllUserMessage} />
                        </div>
                    }
                    <div className='w-full relative'>
                        <div className='top-0 left-0 relative h-screen md:h-auto'>
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
