'use client';
import { useGetPostQuery } from '@/app/redux/Features/getProfile';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoShieldCheck } from 'react-icons/go';

const SiteDetails = () => {
    const { data } = useGetPostQuery();
    console.log(data);
    return (
        <div >

            <div className='flex flex-col items-center justify-center gap-5 py-20 bg-[#f9fafb]'>
                <h1 className='md:text-4xl text-3xl font-semibold text-primary text-center'><span className='block leading-[1.5]'>You Know <br /></span> CARPOOLING <span className='text-[#0b2f9f]'>CO-LOCATION</span> <span className='text-[#2563eb]'>CO-WORKING</span></h1>
                <p className='text-base font-semibold text-gray-500'>and now ...</p>
                <div data-aos="zoom-out-up" data-aos-duration="900" className='flex items-center justify-center gap-5'>
                    <img data-aos="flip-right" data-aos-duration="900" className='w-72 my-5' src="/Images/logo.svg" alt="" />
                </div>
                <h2>As you will have understood, the principle of CoBag is simple: <span className='font-semibold text-primary'>Sharing</span></h2>
                <h2>Sharing what?<span className='font-semibold text-primary'>Sharing luggage</span></h2>
            </div>
            <div>

            </div>

            {/*=========== cards ============ */}

            <div className='lg:w-[60%] w-[90%] mx-auto'>
                <div data-aos="fade-up" data-aos-duration="500" className='grid lg:grid-cols-2 items-center gap-10 my-32'>
                    <div>
                        <h2 className='text-2xl font-semibold text-primary'>CoBag reimburses your luggage</h2>
                        <p className='my-5'>Resell your <span className='font-semibold text-primary '>unused kilos</span> in your suitcases and <span className='text-blue-600'>earn money </span>on every plane or train trip</p>
                        <div className='p-5 rounded-lg bg-[#f1fdf8]'>
                            <h2 className='text-2xl font-semibold text-primary mb-3'>Who do I sell to?</h2>
                            <p className='text-gray-500'>To other CoBag users who will take advantage of your trips for their shipments. Transform your unused kilos into cash and reimburse your suitcase</p>
                        </div>
                        <button className='flex items-center justify-center gap-3 bg-primary text-white py-3 px-5 rounded-lg my-5 w-full'>Sell my unused kilos <FaArrowRightLong className='text-2xl' /> </button>
                        <p className='text-primary'>Resell your unused kilos at 7€/kg with CoBag</p>
                    </div>
                    <div>
                        <img src="/Images/Home/home-1.png" alt="" />
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="500" className='bg-[#e5f0ff] rounded-lg px-5 py-10 flex items-center gap-5'>
                    <div className='flex items-center justify-center min-w-16 h-16 bg-primary rounded-full'>
                        <GoShieldCheck className='text-white text-3xl font-semibold' />
                    </div>
                    <div>
                        <h2 className='font-semibold mb-2 text-primary text-xl'>Your luggage is highly safe with Cobag</h2>
                        <p className='text-gray-500'>Travel with peace of mind : with Cobag's high-level security, you stay in control of your luggage and no unauthorized item can slip through.</p>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="500" className='grid lg:grid-cols-2 items-center gap-10 my-32'>
                    <div>
                        <h2 className='text-2xl font-semibold text-primary'>Take everything with you without leaving your belongings at the door</h2>
                        <p className='my-5 text-primary'>What if your excess luggage had a place in other people's suitcases? Team up with another CoBag traveler</p>

                        <div className='p-5 rounded-lg bg-[#f1fdf8]'>
                            <h2 className='text-2xl font-semibold text-primary mb-3'>How does it work?</h2>
                            <p className='text-gray-500'>Thanks to CoBag, buy the unused kilos of a co-passenger of the same flight and share their suitcases to take all your luggage without leaving anything behind, at a reduced price.</p>
                        </div>
                        <div className='my-5 flex items-center justify-between'>
                            <div className='bg-[#f1fdf8] p-5 rounded-lg text-center'>
                                <p className='text-primary'>A surplus in</p>
                                <h2 className='font-semibold text-primary'>your luggage?</h2>
                            </div>
                            <div>
                                <FaArrowRightLong className='text-2xl text-primary' />
                            </div>
                            <div className='bg-[#f1fdf8] p-5 rounded-lg text-center'>
                                <p className='text-primary'>Use up unused kilos in a person's luggage</p>
                                <h2 className='font-semibold text-primary'>other passenger</h2>
                            </div>
                        </div>

                        <button className='flex items-center justify-center gap-3 bg-primary text-white py-3 px-5 rounded-lg my-5 w-full'>Transport my surplus <FaArrowRightLong className='text-2xl' /> </button>
                        <p className='text-primary text-center'>Stand together with CoBag</p>
                    </div>
                    <div>
                        <img src="/Images/Home/home-2.png" alt="" />
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="500" className='grid lg:grid-cols-2 items-center gap-10 my-32'>
                    <div>
                        <h2 className='text-2xl font-semibold text-primary'>Access products from around the world, without borders</h2>
                        <p className='my-5 text-primary'>The whole world at your fingertips, thanks to our travel couriers</p>

                        <div className='p-5 rounded-lg bg-[#f1fdf8]'>
                            <h2 className='text-2xl font-semibold text-primary mb-3'>How does it work?</h2>
                            <p className='text-gray-500'>A CoBag courier traveler located in the desired country will purchase the product for you and bring it back in his suitcase upon his return to deliver it to you.</p>
                        </div>
                        <div className='my-5 flex items-center gap-5'>
                            <div className='bg-[#f1fdf8] p-5 rounded-lg text-center'>
                                <p className='text-primary'>A product</p>
                                <h2 className='font-semibold text-primary'>not found?</h2>
                            </div>
                            <div>
                                <FaArrowRightLong className='text-2xl text-primary' />
                            </div>
                            <div className='bg-[#f1fdf8] p-5 rounded-lg text-center'>
                                <p className='text-primary'>A CoBag traveler</p>
                                <h2 className='font-semibold text-primary'>reports it to you</h2>
                            </div>
                        </div>

                        <button className='flex items-center justify-center gap-3 bg-primary text-white py-3 px-5 rounded-lg my-5 w-full'>Find my buyer<FaArrowRightLong className='text-2xl' /> </button>
                        <p className='text-primary text-center'>Make the inaccessible possible with CoBag</p>
                    </div>
                    <div>
                        <img src="/Images/Home/home-3.png" alt="" />
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="500" className='grid lg:grid-cols-2 items-center gap-10 my-32'>
                    <div>
                        <h2 className='text-2xl font-semibold text-primary'>Faster delivery than express</h2>
                        <p className='my-5 text-primary'>Benefit from the ultra-speed of a direct flight for sending your parcels internationally</p>

                        <div className='p-5 rounded-lg bg-[#f1fdf8]'>
                            <h2 className='text-2xl font-semibold text-primary mb-3'>How does it work?</h2>
                            <p className='text-gray-500'>Do you have an urgent package to send internationally? With CoBag, a traveler takes charge of your package in the available space of his luggage, takes it with him on his flight and delivers it upon arrival at his destination..</p>
                        </div>
                        <div className='my-5 flex items-center gap-5'>
                            <div className='bg-[#f1fdf8] p-5 rounded-lg text-center'>
                                <p className='text-primary'>Sending the package</p>
                                <h2 className='font-semibold text-primary'>Paris 10:00 a.m.</h2>
                            </div>
                            <div>
                                <FaArrowRightLong className='text-2xl text-primary' />
                            </div>
                            <div className='bg-[#f1fdf8] p-5 rounded-lg text-center'>
                                <p className='text-primary'>Arrival of the package</p>
                                <h2 className='font-semibold text-primary'>Casablanca 1:00 p.m.</h2>
                            </div>
                        </div>

                        <button className='flex items-center justify-center gap-3 bg-primary text-white py-3 px-5 rounded-lg my-5 w-full'>Find a carrier<FaArrowRightLong className='text-2xl' /> </button>
                        <p className='text-primary text-center'>100% faster, 75% cheaper with CoBag</p>
                    </div>
                    <div>
                        <img src="/Images/Home/home-4.png" alt="" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SiteDetails;
