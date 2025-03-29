'use client';
import { useGetPostQuery } from '@/app/redux/Features/getProfile';
import i18n from '@/app/utils/i18';
import AOS from 'aos';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa6';
import { GoShieldCheck } from 'react-icons/go';
import { LuArrowRightLeft } from 'react-icons/lu';
import { motion } from 'framer-motion';

const SiteDetails = () => {
    const { t } = i18n;

    const { data } = useGetPostQuery();


    return (
        <div >

            <div className='flex flex-col items-center justify-center gap-5 md:px-0 px-5 py-20 bg-[#f9fafb]'>
                <h1 className='md:text-4xl text-3xl font-semibold text-primary text-center'>
                    <span className='block leading-[1.5] font-normal text-base text-gray-600 '>
                        You know the
                        {/* {t('SiteYouKnow')}  */}
                        <br />
                        <br />
                    </span> {t('SiteCARPOOLING')} <span className='text-[#0b2f9f]'>{t('SiteCOLOCATION')}</span> <span className='text-[#2563eb]'>{t('SiteCOWORKING')}</span></h1>
                <p className='text-base font-normal text-gray-500'>and now ...</p>

                <motion.div
                    whileInView={{ rotateY: '0turn', scale: 1 }}  // Flip on scroll
                    initial={{ rotateY: '-0.5turn', scale: 2 }}  // Start flipped
                    transition={{ duration: 0.5 }}  // Smooth transition
                    className='flex items-center justify-center gap-5'
                >
                    <img
                        className="w-72 my-5 transform transition-all duration-900 scale-[1.2] hover:scale-[1]" // Image style with hover
                        src="/Images/NewSection/cobag-logo.png"
                        alt="Cobag Logo"
                    />
                </motion.div>


                <h2 className='text-center text-xl'>{t('SiteCObagSharing')} <span className='font-semibold text-primary'>Sharing,</span></h2>
                <h2 className='text-center text-xl'> {t('SiteCObagSharingwhat')} <span className='font-semibold text-primary'> Sharing luggage</span></h2>
            </div>

            {/*=========== cards ============ */}

            <div className='lg:w-[80%] w-[90%] mx-auto '>
                <div data-aos="fade-up" data-aos-duration="500" className='min-h-[80vh] my-10'>
                    <h2 className='my-10 md:text-4xl text-3xl font-semibold text-primary text-center'>What CoBag makes possible</h2>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                        <div className='md:hover:-mt-4 shadow-lg duration-500 relative rounded-2xl  overflow-hidden'>
                            <div className="relative">
                                <img className="w-full h-[200px] object-cover" src="/Images/NewSection/south-korea.webp" alt="" />
                                <div className="absolute inset-0 bg-black opacity-40"></div> {/* Black overlay */}
                                <h2 className="text-white font-semibold flex items-center gap-2 absolute top-[10%] justify-center w-full text-xl">
                                    Los Angeles <LuArrowRightLeft /> Seoul
                                </h2>
                            </div>

                            <div className='p-3 flex flex-col items-end'>
                                <div className='mb-16'>
                                    <h2 className='flex items-center justify-between font-semibold'>Traveler-courier<span className='flex items-center'><span className='-rotate-45 block'>✈</span> 14h35</span></h2>
                                    <hr className='block my-5' />
                                    <h3 className='font-semibold'>On his round trip:</h3>

                                    <h2 className='text-2xl font-semibold text-primary my-3'>Earnings +273€</h2>

                                    <ul>
                                        <li className='flex items-center justify-between my-5'>5 purchasing missions <span className='font-semibold'>+151€</span></li>
                                        <li className='flex items-center justify-between my-5'>6 parcel shipments
                                            <span className='font-semibold '>+151€</span></li>
                                        <li className='flex items-center justify-between my-5 font-semibold'>Total <span className='font-semibold text-green-600'>+273€</span></li>
                                    </ul>
                                    <hr className='block my-5' />

                                    <h2 className='font-semibold text-center text-blue-600 text-xl'>What if instead of paying, you got paid?</h2>
                                </div>

                                <div className='absolute bottom-5 right-0 left-0 flex items-center justify-center mt-5'>
                                    <Link href={`/itravel`} className='bg-primary hover:scale-[1.1] duration-300 text-white py-2 px-8 rounded-lg '>I also want to win {'>'}</Link>
                                </div>
                            </div>
                        </div>
                        <div className='md:hover:-mt-4 shadow-lg  relative duration-500 rounded-2xl overflow-hidden'>
                            <div className="relative">
                                <img className="w-full h-[200px] object-cover" src="/Images/NewSection/46308994-37047419.jpg" alt="" />
                                <div className="absolute inset-0 bg-black opacity-40"></div> {/* Black overlay */}
                                <h2 className="text-white font-semibold flex items-center gap-2 absolute top-[10%] justify-center w-full text-xl">
                                    Paris  <LuArrowRightLeft /> Barcelona
                                </h2>
                            </div>

                            <div className='p-3'>
                                <div className='mb-16'>
                                    <h2 className='flex items-center justify-between font-semibold'>Purchase abroad<span className='flex items-center'><span className='-rotate-45 block'>✈</span> 1h40</span></h2>
                                    <hr className='block my-5' />
                                    <h3 className='font-semibold'>On this purchase:</h3>

                                    <h2 className='text-2xl font-semibold text-primary my-3'>Savings -280€</h2>

                                    <ul>
                                        <li className='flex items-center justify-between my-5'>4 cartons of Spanish tobacco
                                            <span className='font-semibold'>220€</span></li>
                                        <li className='flex items-center justify-between my-5'>4 cartons of Paris tobacco

                                            <span className='font-semibold '>500€</span></li>
                                        <li className='flex items-center justify-between my-5 font-semibold'>Total difference
                                            <span className='font-semibold text-green-600'>-280€
                                            </span></li>
                                    </ul>
                                    <hr className='block my-5' />

                                    <h2 className='font-semibold text-blue-600 text-xl text-center'>What if instead of paying, you saved?
                                    </h2>
                                </div>

                                <div className='absolute bottom-5 right-0 left-0 flex items-center justify-center mt-5'>
                                    <Link href={`/itravel`} className='bg-primary hover:scale-[1.1] duration-300 text-white py-2 px-8 rounded-lg '>I also want to buy {'>'}</Link>
                                </div>
                            </div>
                        </div>
                        <div className='md:hover:-mt-4 shadow-lg  relative duration-500 rounded-2xl overflow-hidden'>

                            <div className="relative">
                                <img className="w-full h-[200px] object-cover" src="/Images/NewSection/43579491-35914718.jpg" alt="" />
                                <div className="absolute inset-0 bg-black opacity-40"></div> {/* Black overlay */}
                                <h2 className="text-white font-semibold flex items-center gap-2 absolute top-[10%] justify-center w-full text-xl">
                                    Cancun  <LuArrowRightLeft /> New York
                                </h2>
                            </div>

                            <div className='p-3'>
                                <div className='mb-16'>
                                    <h2 className='flex items-center justify-between font-semibold'>Transport of surplus
                                        <span className='flex items-center'><span className='-rotate-45 block'>✈</span> 8h30</span></h2>
                                    <hr className='block my-5' />
                                    <h3 className='font-semibold'>On his excess baggage:
                                    </h3>

                                    <h2 className='text-2xl font-semibold text-primary my-3'>Savings -50€
                                    </h2>

                                    <ul>
                                        <li className='flex items-center justify-between my-5'>10kg surplus with CoBag
                                            <span className='font-semibold'>50€                                    </span></li>
                                        <li className='flex items-center justify-between my-5'>10kg surplus WITHOUT CoBag
                                            <span className='font-semibold '>100€</span></li>
                                        <li className='flex items-center justify-between my-5 font-semibold'>Total difference
                                            <span className='font-semibold text-green-600'>-50€
                                            </span></li>
                                    </ul>
                                    <hr className='block my-5' />

                                    <h2 className='font-semibold text-blue-600 text-xl text-center'>What if instead of paying, you saved?
                                    </h2>

                                </div>
                                <div className='flex absolute bottom-5 right-0 left-0 items-center justify-center mt-5'>
                                    <Link href={`/itravel`} className='bg-primary hover:scale-[1.1] duration-300 text-white py-2 px-8 rounded-lg '>I also want to save {'>'}</Link>
                                </div>
                            </div>
                        </div>
                        <div className='md:hover:-mt-4 shadow-lg relative duration-500 rounded-2xl overflow-hidden'>
                            <div className="relative">
                                <img className="w-full h-[200px] object-cover" src="/Images/NewSection/images.jpg" alt="" />
                                <div className="absolute inset-0 bg-black opacity-40"></div> {/* Black overlay */}
                                <h2 className="text-white font-semibold flex items-center gap-2 absolute top-[10%] justify-center w-full text-xl">
                                    Brussels  <LuArrowRightLeft /> Dakar
                                </h2>
                            </div>
                            <div className='p-3'>
                                <div className='mb-16'>
                                    <h2 className='flex items-center justify-between font-semibold'>Sending parcels

                                        <span className='flex items-center'><span className='-rotate-45 block'>✈</span> 5h50
                                        </span></h2>
                                    <hr className='block my-5' />
                                    <h3 className='font-semibold'>On sending your package:</h3>

                                    <h2 className='text-2xl font-semibold text-primary my-3'>Delivery in 6 hours 20 minutes
                                    </h2>

                                    <ul>
                                        <li className='flex items-center justify-between my-5'>5kg shipping with CoBag
                                            <span className='font-semibold'>25€
                                            </span></li>
                                        <li className='flex items-center justify-between my-5'>5kg shipment WITHOUT CoBag
                                            <span className='font-semibold '>70€
                                            </span></li>
                                        <li className='flex items-center justify-between my-5 font-semibold'>Total difference
                                            <span className='font-semibold text-green-600'>-45€
                                            </span></li>
                                    </ul>
                                    <hr className='block my-5' />

                                    <h2 className='font-semibold text-blue-600 text-xl text-center'>What if instead of paying, you saved?</h2>
                                </div>

                                <div className='flex absolute bottom-5 right-0 left-0 items-center justify-center mt-5'>
                                    <Link href={`/itravel`} className='bg-primary hover:scale-[1.1] duration-300 text-white py-2 px-8 rounded-lg '>I also want to send {'>'}</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="500" className='md:my-32 my-10 grid lg:grid-cols-2 gap-10 items-center'>
                    <div>
                        <h2 className='md:text-4xl text-2xl font-semibold text-primary'>CoBag does justice to travelers: Your suitcases are worth gold!</h2>
                        <p className='my-5 md:text-2xl text-primary'>Tired of your luggage traveling for more than you do? With CoBag, take back control: Every <span className='font-semibold text-primary'>kilo lost</span> in your suitcase is <span className='font-semibold text-primary'>money lost </span>. Turn them into kilos available for others... and <span className='font-semibold text-primary'>into profits for you, in complete safety !</span></p>

                        <div className='bg-[#f3fef7] p-5 rounded-lg'>
                            <h3 className='font-semibold text-2xl text-primary mb-3'>Who do I sell to?</h3>
                            <p>To other CoBag users who will optimize your trips for their needs. Turn your lost weight into cash and reimburse your suitcase.</p>
                        </div>
                        <p className='my-5 text-primary text-center font-medium text-xl'>Resell your lost kilos for €5/kg (minimum of €12)</p>

                    </div>
                    <div className='flex justify-end'>
                        <img className='md:w-full' src="/Images/NewSection/queen_luggage_CoBag.png" alt="" />
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="500" className=' rounded-lg md:px-5 lg:my-20'>
                    <img className='md:w-2/4 w-full mx-auto md:mb-0 mb-10' src="/Images/NewSection/Screenshot_19.png" alt="" />
                    <h2 className='text-center md:text-[18px] leading-[2] mt-16'>Yes, you've <span className='text-primary font-semibold leading-[2]'>noticed, your luggage costs you more than your own ticket.</span> <br />
                        <span className='text-primary font-semibold mb-1 leading-[2]'>What if, instead of paying, you got paid?</span> Join the <span className='text-primary font-semibold mb-1 leading-[2]'>smart travelers!</span> <br /></h2>
                    <div className='flex items-center justify-center'>
                        <button className='flex items-center gap-2 bg-primary text-white py-2 px-8 rounded-lg mt-5'>Sell ​​my lost kilos <FaArrowRight />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SiteDetails;
