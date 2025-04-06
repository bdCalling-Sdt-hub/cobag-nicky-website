'use client'
import i18n from '@/app/utils/i18';
import React from 'react';

const HeroConcept = () => {
    const { t } = i18n;



    return (
        <div className=' md:py-32 pb-10  flex items-center justify-center '>
            {/* <div data-aos="fade-up" data-aos-duration="500" className='text-center md:px-0 px-5'>
                <h2 className='md:text-5xl text-3xl font-semibold text-primary'>{t('CoBagTravelshareconnect')}</h2>
                <h3 className='md:my-5 py-3  md:text-xl text-base '>{t('Whatifyoursuitcaseisvaluable')}</h3>
                <p className='text-sm md:text-base'>{t('Turnyourunusedluggagespace')}<br /> <span>{t('Earnmoneywhilehelpingothers')}</span></p>
            </div> */}
            <div>
                <h2 className='md:text-3xl text-2xl font-semibold text-primary text-center'>Detailed tutorial</h2>
                <img className='md:w-2/4 mx-auto' src="/Images/NewSection/tutosdfsdf54.png" alt="" />
            </div>
        </div>
    );
}

export default HeroConcept;

