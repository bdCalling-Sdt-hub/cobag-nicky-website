'use client';
import i18n from '@/app/utils/i18';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Aos from 'aos';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { MdOutlineEmail } from 'react-icons/md';


const YouraBuyer = () => {
    const { t } = i18n;
    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration in milliseconds
            // Animations trigger only once
        });
    }, [])

    return (
        <div>
            <div className='bg-primary p-10 mb-10 md:w-[50%] w-[90%] mx-auto rounded-lg'>
                <h2 className='text-white md:text-3xl text-2xl font-semibold text-center'>Didn't find your answer?</h2>
                <p className='text-white text-center my-5'>Contact our customer support or check out our detailed guides.</p>
                <div className='flex items-center justify-center flex-wrap gap-5'>
                    <button className='hover:scale-[1.1] duration-500 flex items-center gap-1 bg-white py-3 px-10 text-primary font-semibold rounded-md'><IoChatbubbleOutline />
                        Contact Support</button>
                    <button onClick={() => window.open('https://mail.google.com/mail/u/0/?fs=1&to=contact@cobag.com&tf=cm')} className='hover:scale-[1.1] duration-500 flex items-center gap-1 bg-[#4054A4] py-3 px-10 text-white rounded-md'>
                        <MdOutlineEmail />
                        contact@cobag.com</button>
                </div>
            </div>
        </div>
    );
}

export default YouraBuyer;