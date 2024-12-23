'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const DoseItWork = () => {

     useEffect(() => {
            AOS.init({ duration: 1000 }); // Initialize AOS with desired options
        }, []);
    
    return (
        <div className='bg-[#EEEFF8] py-20 '>
            <h2 data-aos="fade-up" data-aos-duration="300" className='text-center md:text-5xl text-3xl text-primary font-semibold'>How does it work?</h2>

            <div className='mt-10 md:w-[70%] w-[90%] mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                <div data-aos="fade-up" data-aos-duration="300" className='bg-white relative p-10 flex flex-col items-center rounded-xl text-center'>
                    <img className='' src="/Images/Landingpage/Home_work_1.png" alt="" />
                    <h3 className='my-5 text-xl font-semibold text-primary'>Post or search for an ad</h3>
                    <p>Publish your trip or find a traveler that meets your needs.</p>
                    <span className='absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center'>1</span>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className='bg-white relative p-10 flex flex-col items-center rounded-xl text-center'>
                    <img className='' src="/Images/Landingpage/Home_work_2.png" alt="" />
                    <h3 className='my-5 text-xl font-semibold text-primary'>Chat via our messaging</h3>
                    <p>Validate all details via our integrated secure messaging.</p>
                    <span className='absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center'>2</span>
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className='bg-white relative p-10 flex flex-col items-center rounded-xl text-center'>
                    <img className='' src="/Images/Landingpage/Home_work_3.png" alt="" />
                    <h3 className='my-5 text-xl font-semibold text-primary'>Confirm delivery</h3>
                    <p>Use the secure code to complete the transaction securely.</p>
                    <span className='absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center'>3</span>
                </div>
            </div>

        </div>
    );
}

export default DoseItWork;
