import i18n from '@/app/utils/i18';
import React from 'react';

const HeroConcept = () => {
    const { t } = i18n;
    return (
        <div className='bg-[#f7f7fc] md:py-32 py-20 flex items-center justify-center '>
            <div data-aos="fade-up" data-aos-duration="500" className='text-center md:px-0 px-5'>
                <h2 className='md:text-5xl text-3xl font-semibold text-primary'>{t('CoBagTravelshareconnect')}</h2>
                <h3 className='md:my-5 py-3  md:text-xl text-base '>{t('Whatifyoursuitcaseisvaluable')}</h3>
                <p className='text-sm md:text-base'>{t('Turnyourunusedluggagespace')}<br /> <span>{t('Earnmoneywhilehelpingothers')}</span></p>
            </div>
        </div>
    );
}

export default HeroConcept;

