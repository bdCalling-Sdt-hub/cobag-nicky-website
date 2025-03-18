'use client';
import i18n from '@/app/utils/i18';
import React from 'react';
import { BsCurrencyDollar } from "react-icons/bs";
import { GoAlert, GoLaw } from 'react-icons/go';



const HalfEmptyLuggage = () => {

    const { t } = i18n;

    return (
        <div className='w-[90%] lg:w-[80%] mx-auto md:py-20 py-10'>
            {/* <div className='md:w-2/4 mx-auto text-center my-10'>
                <h2 className='md:text-4xl text-3xl font-semibold text-primary'>{t('AreYouLeavingWithHalfEmptyLuggage2511')}</h2>
                <p className='mt-3 font-semibold text-[#737373]'>{t('DontLetThoseUnusedKilosGoToWaste2511')}</p>
            </div> */}





            <div >
                <div className='my-20 flex items-center justify-center'>
                    <div className='flex items-center gap-5 shadow-lg rounded-lg p-10'>
                        <div className='bg-gradient-to-tl w-14 h-14 flex items-center justify-center from-[#C7FFD8] to-primary text-white rounded-full'>
                            <BsCurrencyDollar className='text-3xl ' />
                        </div>
                        <div>
                            <span>
                                {t('AverageEarningsPerTraveler')}
                            </span>
                            <h2 className='text-3xl font-semibold text-primary'>30€ - 300€</h2>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-duration="500" className='my-32 grid lg:grid-cols-2 gap-10 items-center'>
                    <div>
                        <h2 className='text-4xl font-semibold text-primary'>CoBag does justice to travelers: Your suitcases are worth gold!</h2>
                        <p className='my-5 text-2xl'>Tired of your luggage traveling for more than you do? With CoBag, take back control: Every <span className='font-semibold text-primary'>kilo lost</span> in your suitcase is <span className='font-semibold text-primary'>money lost </span>. Turn them into kilos available for others... and <span className='font-semibold text-primary'>into profits for you, in complete safety !</span></p>

                        <div className='bg-[#f3fef7] p-5 rounded-lg'>
                            <h3 className='font-semibold text-2xl text-primary mb-3'>Who do I sell to?</h3>
                            <p>To other CoBag users who will optimize your trips for their needs. Turn your lost weight into cash and reimburse your suitcase.</p>
                        </div>
                        <p className='my-5 text-primary text-center font-medium text-xl'>Resell your lost kilos for €5/kg (minimum of €12)</p>

                    </div>
                    <div className='flex justify-end'>
                        <img className='w-4/5' src="/Images/NewSection/queen_luggage_CoBag.png" alt="" />
                    </div>
                </div>

            </div>

            <div data-aos="fade-up" data-aos-duration="500" className=' rounded-lg px-5 py-10'>
                <img className='w-2/4 mx-auto' src="/Images/NewSection/Screenshot_19.png" alt="" />
                <h2 className='text-center text-xl'>Yes, you've <span className='text-primary font-semibold'>noticed, your luggage costs you more than your own ticket.</span> <br />
                    <span className='text-primary font-semibold mb-1'>What if, instead of paying, you got paid?</span> Join the <span className='text-primary font-semibold mb-1'>smart travelers!</span> <br />
                    Sell my lost kilos</h2>
                <div className='flex items-center justify-center'>
                    <button className='bg-primary text-white py-2 px-8 rounded-lg mt-5'>Sell ​​my lost kilos {'>'}</button>
                </div>
            </div>



        </div>
    );
}

export default HalfEmptyLuggage;
