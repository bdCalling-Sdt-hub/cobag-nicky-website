import React from 'react';
import { CiClock2, CiLock } from 'react-icons/ci';
import { FaUserCheck } from 'react-icons/fa6';
import { FiShield, FiUserCheck } from 'react-icons/fi';

const ITravelVideoSection = () => {
    return (
        <div className=''>
            <div className='bg-[#f9fafb]'>
                <div className='w-[90%] mx-auto py-20'>
                    <div className='relative mt-10 flex justify-center'>
                        <iframe className='rounded-lg' width="560" height="315" src="https://www.youtube.com/embed/EH3vGeqeIAo?si=fekxRrdvghHIDvEK" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                    </div>
                </div>
            </div>


            <div className='w-[90%] mx-auto py-20 grid lg:grid-cols-4 grid-cols-1 gap-5 '>
                <div className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <FiUserCheck className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>Identity verified</h2>
                    <p className='text-[#000000b2]'>All users are verified, including senders, buyers and travelers, with ticket validation to ensure a reliable and secure service.</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <CiLock className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>Secure payment</h2>
                    <p className='text-[#000000b2]'>Payments are held until delivery is confirmed, ensuring a safe and transparent transaction</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <CiClock2 className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>Security code</h2>
                    <p className='text-[#000000b2]'>Two 4-digit codes secure each step: upon handover and delivery, guaranteeing maximum traceability and security.</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 bg-primary text-white flex items-center justify-center rounded-full'>
                        <FiShield className='text-2xl ' />
                    </div>
                    <h2 className='md:text-2xl text-xl font-semibold text-primary my-5 '>CoBag Insurance</h2>
                    <p className='text-[#000000b2]'>Benefit from comprehensive coverage with CoBag insurance, protecting your parcels up to €1000 in case of any incident. Travel with peace of mind, your shipments are secure.</p>
                </div>
            </div>


        </div>
    );
}

export default ITravelVideoSection;
