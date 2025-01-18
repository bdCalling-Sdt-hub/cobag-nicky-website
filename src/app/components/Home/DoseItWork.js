'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Link from 'next/link';
import { IoInformationCircle } from 'react-icons/io5';
import i18n from '@/app/utils/i18';

const DoseItWork = () => {

    const {t} = i18n ;

     useEffect(() => {
            AOS.init({ duration: 1000 }); // Initialize AOS with desired options
        }, []);
    
    return (
        <div className='bg-[#EEEFF8] py-20 '>
            <h2 data-aos="fade-up" data-aos-duration="300" className='text-center md:text-5xl text-3xl text-primary font-semibold'>{t('Howdoesitwork1001')}</h2>

            <div className='mt-10 md:w-[70%] w-[90%] mx-auto grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10'>
                <div data-aos="fade-up" data-aos-duration="300" className='bg-white relative p-10 flex flex-col items-center rounded-xl text-center'>
                    <img className='' src="/Images/Landingpage/Home_work_1.png" alt="" />
                    <h3 className='my-5 text-xl font-semibold text-primary'>{t('Postorsearchforanad1002')}</h3>
                    <p>{t('Publishyourtriporfindatravelerthatmeetsyourneeds1003')}</p>
                    <span className='absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center'>1</span>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className='bg-white relative p-10 flex flex-col items-center rounded-xl text-center'>
                    <img className='' src="/Images/Landingpage/Home_work_2.png" alt="" />
                    <h3 className='my-5 text-xl font-semibold text-primary'>{t('Chatviaourmessaging1004')}</h3>
                    <p>{t('Validatealldetailsviaourintegratedsecuremessaging1005')}</p>
                    <span className='absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center'>2</span>
                </div>
                <div data-aos="fade-up" data-aos-duration="800" className='bg-white relative p-10 flex flex-col items-center rounded-xl text-center'>
                    <img className='' src="/Images/Landingpage/Home_work_3.png" alt="" />
                    <h3 className='my-5 text-xl font-semibold text-primary'>{t('Confirmdelivery1006')}</h3>
                    <p>{t('Usethesecurecodetocompletethetransactionsecurely1007')}</p>
                    <span className='absolute -top-2 -left-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center'>3</span>
                </div>
            </div>
            <Link href={'/ourconcept'} className='flex items-center justify-center mt-20'>
                <button className='bg-primary text-white py-3 px-8 rounded-xl flex items-center gap-2 justify-center'> <IoInformationCircle className='text-xl' />{t('LearnMore1008')}</button>
            </Link>

        </div>
    );
}

export default DoseItWork;
