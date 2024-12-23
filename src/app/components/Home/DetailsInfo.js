"use client";

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const DetailsInfo = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with desired options
    }, []);

    return (
        <div className="py-20 bg-white">
            <div className="w-[90%] mx-auto my-10 grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 justify-start items-start text-center">

                <div data-aos="fade-up" data-aos-duration="300" className='flex flex-col items-center justify-center '>
                    <div className='h-16 w-16 flex items-center justify-center bg-primary rounded-full '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M21.8346 28V25.3333C21.8346 23.9188 21.2727 22.5623 20.2725 21.5621C19.2723 20.5619 17.9158 20 16.5013 20H8.5013C7.08681 20 5.73026 20.5619 4.73007 21.5621C3.72987 22.5623 3.16797 23.9188 3.16797 25.3333V28" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.5013 14.6667C15.4468 14.6667 17.8346 12.2789 17.8346 9.33333C17.8346 6.38781 15.4468 4 12.5013 4C9.55578 4 7.16797 6.38781 7.16797 9.33333C7.16797 12.2789 9.55578 14.6667 12.5013 14.6667Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21.832 14.6667L24.4987 17.3333L29.832 12" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h2 className='my-5 text-xl font-semibold text-primary'>Identity verified</h2>
                    <p>All users are verified, including senders, buyers and travelers, with ticket validation to ensure a reliable and secure service.</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="500" className='flex flex-col items-center justify-center '>
                    <div className='h-16 w-16 flex items-center justify-center bg-primary rounded-full '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M16.5013 22.6667C17.2377 22.6667 17.8346 22.0697 17.8346 21.3333C17.8346 20.597 17.2377 20 16.5013 20C15.7649 20 15.168 20.597 15.168 21.3333C15.168 22.0697 15.7649 22.6667 16.5013 22.6667Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M25.8333 13.333H7.16667C5.69391 13.333 4.5 14.5269 4.5 15.9997V26.6663C4.5 28.1391 5.69391 29.333 7.16667 29.333H25.8333C27.3061 29.333 28.5 28.1391 28.5 26.6663V15.9997C28.5 14.5269 27.3061 13.333 25.8333 13.333Z" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.83203 13.3337V9.33366C9.83203 7.56555 10.5344 5.86986 11.7847 4.61961C13.0349 3.36937 14.7306 2.66699 16.4987 2.66699C18.2668 2.66699 19.9625 3.36937 21.2127 4.61961C22.463 5.86986 23.1654 7.56555 23.1654 9.33366V13.3337" stroke="white" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h2 className='my-5 text-xl font-semibold text-primary'>Secure payment</h2>
                    <p>Payments are held until delivery is confirmed, ensuring a safe and transparent transaction</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="800" className='flex flex-col items-center justify-center '>
                    <div className='h-16 w-16 flex items-center justify-center bg-primary rounded-full '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M16.5 29.3337C23.8638 29.3337 29.8333 23.3641 29.8333 16.0003C29.8333 8.63653 23.8638 2.66699 16.5 2.66699C9.13616 2.66699 3.16663 8.63653 3.16663 16.0003C3.16663 23.3641 9.13616 29.3337 16.5 29.3337Z" stroke="#E7E7E7" stroke-width="2.5" />
                            <path d="M16.5 10.667V16.0003L19.1667 18.667" stroke="#E7E7E7" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h2 className='my-5 text-xl font-semibold text-primary'>Security code</h2>
                    <p>Two <span className='font-semibold'>4-digit codes</span> secure each step: upon handover and delivery, guaranteeing maximum traceability and security.</p>
                </div>

                <div data-aos="fade-up" data-aos-duration="1000" className='flex flex-col items-center justify-center '>
                    <div className='h-16 w-16 flex items-center justify-center bg-primary rounded-full '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                            <path d="M16.501 3.2002C12.9053 6.25726 10.6514 6.40019 6.901 6.40019V18.7042C6.901 23.6141 10.3175 24.8951 16.501 28.8002C22.6845 24.8951 26.101 23.6141 26.101 18.7042C26.101 13.7943 26.101 6.40019 26.101 6.40019C22.3506 6.40019 20.0967 6.25726 16.501 3.2002Z" stroke="white" stroke-width="2.5" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h2 className='my-5 text-xl font-semibold text-primary'>CoBag Insurance</h2>
                    <p>Benefit from comprehensive coverage with CoBag <span className='font-semibold'>insurance</span>, protecting your parcels up to <span className='font-semibold'>€1000</span> in case of any incident. Travel with peace of mind, your shipments are secure</p>
                </div>


                {/* Add other items similarly */}
            </div>
        </div>
    );
};

export default DetailsInfo;
