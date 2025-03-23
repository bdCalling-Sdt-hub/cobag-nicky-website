'use client';
import { useGetPostQuery } from '@/app/redux/Features/getProfile';
import i18n from '@/app/utils/i18';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa6';
import { GoShieldCheck } from 'react-icons/go';
import { LuArrowRightLeft } from 'react-icons/lu';

const SiteDetails = () => {
    const { t } = i18n;


    const { data } = useGetPostQuery();
    console.log(data);




    return (
        <div >

            <div className='flex flex-col items-center justify-center gap-5 md:px-0 px-5 py-20 bg-[#f9fafb]'>
                <h1 className='md:text-4xl text-3xl font-semibold text-primary text-center'>
                    <span className='block leading-[1.5] text-base text-gray-800 '>{t('SiteYouKnow')} <br /></span> {t('SiteCARPOOLING')} <span className='text-[#0b2f9f]'>{t('SiteCOLOCATION')}</span> <span className='text-[#2563eb]'>{t('SiteCOWORKING')}</span></h1>
                <p className='text-base font-semibold text-gray-500'>and now ...</p>
                <div data-aos="zoom-out-up" data-aos-duration="900" className='flex items-center justify-center gap-5'>
                    <img data-aos="flip-right" data-aos-duration="900" className='w-72 my-5' src="/Images/NewSection/cobag-logo.png" alt="" />
                </div>
                <h2 className='text-center'>{t('SiteCObagSharing')} <span className='font-semibold text-primary'>Sharing,</span></h2>
                <h2>{t('SiteCObagSharingwhat')}<span className='font-semibold text-primary'>Sharing luggage</span></h2>
            </div>
            <div>

            </div>

            {/*=========== cards ============ */}

            <div className='lg:w-[80%] w-[90%] mx-auto '>

                <div data-aos="fade-up" data-aos-duration="500" className='min-h-[80vh] my-10'>
                    <h2 className='my-10 md:text-4xl text-3xl font-semibold text-primary text-center'>What CoBag makes possible</h2>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
                        <div className='md:hover:-mt-4 duration-500 rounded-2xl overflow-hidden shadow'>
                            <div className="relative bg-[#0000008e]">
                                <img className="w-full min-h-[200px]" src="/Images/NewSection/south-korea.webp" alt="" />
                                <h2 className="text-white font-semibold flex items-center gap-2 absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[0%] text-2xl">
                                    Paris <LuArrowRightLeft /> Seoul
                                </h2>
                            </div>
                            <div className='p-3'>
                                <h2 className='flex items-center justify-between font-semibold'>Traveler-courier<span className='flex items-center'><span className='-rotate-45 block'>✈</span> 14h35</span></h2>
                                <hr className='block my-5' />
                                <h3 className='font-semibold'>On his round trip:</h3>

                                <h2 className='text-2xl font-semibold text-primary my-3'>Gains +273€</h2>

                                <ul>
                                    <li className='flex items-center justify-between my-5'>5 purchasing missions <span className='font-semibold'>+151€</span></li>
                                    <li className='flex items-center justify-between my-5'>6 parcel shipments
                                        <span className='font-semibold '>+151€</span></li>
                                    <li className='flex items-center justify-between my-5 font-semibold'>Total <span className='font-semibold text-green-600'>+273€</span></li>
                                </ul>
                                <hr className='block my-5' />

                                <h2 className='font-semibold text-center text-blue-600 text-xl'>What if instead of paying, you got paid?</h2>

                                <div className='flex items-center justify-center mt-5'>
                                    <Link href={`/itravel`} className='bg-primary hover:scale-[1.1] duration-300 text-white py-2 px-8 rounded-lg '>I also want to win {'>'}</Link>
                                </div>
                            </div>
                        </div>
                        <div className='md:hover:-mt-4 duration-500 rounded-2xl overflow-hidden shadow'>
                            <div className="relative">
                                <img className="w-full h-[200px]" src="/Images/NewSection/46308994-37047419.jpg" alt="" />
                                <h2 className="text-white font-semibold flex items-center gap-2 absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[0%] text-2xl">
                                    Paris <LuArrowRightLeft /> Barcelona
                                </h2>
                            </div>
                            <div className='p-3'>
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

                                <div className='flex items-center justify-center mt-5'>
                                    <Link href={`/itravel`} className='bg-primary hover:scale-[1.1] duration-300 text-white py-2 px-8 rounded-lg '>I also want to buy {'>'}</Link>
                                </div>
                            </div>
                        </div>
                        <div className='md:hover:-mt-4 duration-500 rounded-2xl overflow-hidden shadow'>
                            <div className="relative">
                                <img className="w-full h-[200px]" src="/Images/NewSection/43579491-35914718.jpg" alt="" />
                                <h2 className="text-white font-semibold flex items-center gap-2 absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[0%] text-2xl w-full mx-auto justify-center">
                                    Paris <LuArrowRightLeft /> New York
                                </h2>
                            </div>
                            <div className='p-3'>
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

                                <div className='flex items-center justify-center mt-5'>
                                    <Link href={`/itravel`} className='bg-primary hover:scale-[1.1] duration-300 text-white py-2 px-8 rounded-lg '>I also want to save {'>'}</Link>
                                </div>
                            </div>
                        </div>
                        <div className='md:hover:-mt-4 duration-500 rounded-2xl overflow-hidden shadow'>
                            <div className="relative">
                                <img className="w-full h-[200px] " src="/Images/NewSection/images.jpg" alt="" />
                                <h2 className="text-white font-semibold flex items-center gap-2 absolute top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-[0%] text-2xl">
                                    Paris <LuArrowRightLeft /> Dakar
                                </h2>
                            </div>
                            <div className='p-3'>
                                <h2 className='flex items-center justify-between font-semibold'>Sending parcels

                                    <span className='flex items-center'><span className='-rotate-45 block'>✈</span> 5h50
                                    </span></h2>
                                <hr className='block my-5' />
                                <h3 className='font-semibold'>On sending your package:</h3>

                                <h2 className='text-2xl font-semibold text-primary my-3'>Delivery in 5 hours 50 minutes
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

                                <h2 className='font-semibold text-blue-600 text-xl text-center'>What if instead of paying, you got paid?</h2>

                                <div className='flex items-center justify-center mt-5'>
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
                        <img className='md:w-4/5' src="/Images/NewSection/queen_luggage_CoBag.png" alt="" />
                    </div>
                </div>

                <div data-aos="fade-up" data-aos-duration="500" className=' rounded-lg md:px-5 my-10'>
                    <img className='md:w-2/4 w-full mx-auto md:mb-0 mb-10' src="/Images/NewSection/Screenshot_19.png" alt="" />
                    <h2 className='text-center md:text-xl leading-[1.5]'>Yes, you've <span className='text-primary font-semibold'>noticed, your luggage costs you more than your own ticket.</span> <br />
                        <span className='text-primary font-semibold mb-1'>What if, instead of paying, you got paid?</span> Join the <span className='text-primary font-semibold mb-1'>smart travelers!</span> <br />
                        Sell my lost kilos</h2>
                    <div className='flex items-center justify-center'>
                        <button className='flex items-center gap-2 bg-primary text-white py-2 px-8 rounded-lg mt-5'>Sell ​​my lost kilos <FaArrowRight />
                        </button>
                    </div>
                </div>
                {/* 
                <div data-aos="fade-up" data-aos-duration="500" className='grid lg:grid-cols-2 items-center gap-10 my-32'>
                    <div>
                        <h2 className='text-2xl font-semibold text-primary'>{t('Takeeverythingwithyouwithout')}</h2>
                        <p className='my-5 text-primary'>{t('Whatifyourexcessluggage')}</p>

                        <div className='p-5 rounded-lg bg-[#f1fdf8]'>
                            <h2 className='text-2xl font-semibold text-primary mb-3'>{t('Howdoesitworkit')}</h2>
                            <p className='text-gray-500'>{t('ThankstoCoBagbuythe')}</p>
                        </div>
                        <div className='my-5 flex items-center justify-between'>
                            <div className='bg-[#f1fdf8] p-5 rounded-lg text-center'>
                                <p className='text-primary'>{t('Asurplusin')}</p>
                                <h2 className='font-semibold text-primary'>{t('yourluggage2')}</h2>
                            </div>
                            <div>
                                <FaArrowRightLong className='text-2xl text-primary' />
                            </div>
                            <div className='bg-[#f1fdf8] p-5 rounded-lg text-center'>
                                <p className='text-primary'>{t('Useupunusedkilosinperson')}</p>
                                <h2 className='font-semibold text-primary'>{t('otherpassenger')}</h2>
                            </div>
                        </div>

                        <button className='flex items-center justify-center gap-3 bg-primary text-white py-3 px-5 rounded-lg my-5 w-full'>{t('Transportmysurplus')} <FaArrowRightLong className='text-2xl' /> </button>
                        <p className='text-primary text-center'>{t('StandtogetherwithCoBag')}</p>
                    </div>
                    <div>
                        <img src="/Images/Home/home-2.png" alt="" />
                    </div>
                </div>


                <div data-aos="fade-up" data-aos-duration="500" className='grid lg:grid-cols-2 items-center gap-10 my-32'>
                    <div>
                        <h2 className='text-2xl font-semibold text-primary'>{t('AccessProducts12')}</h2>
                        <p className='my-5 text-primary'>{t('Description121')}</p>

                        <div className='p-5 rounded-lg bg-[#f1fdf8]'>
                            <h2 className='text-2xl font-semibold text-primary mb-3'>{t('HowDoesItWork12')}</h2>
                            <p className='text-gray-500'>{t('HowItWorks121')}</p>
                        </div>
                        <div className='my-5 flex items-center gap-5'>
                            <div className='bg-[#f1fdf8] p-5 rounded-lg text-center'>
                                <p className='text-primary'>{t('ProductNotFound21')}</p>
                                <h2 className='font-semibold text-primary'>{t('ProductNotFoundDesc12')}</h2>
                            </div>
                            <div>
                                <FaArrowRightLong className='text-2xl text-primary' />
                            </div>
                            <div className='bg-[#f1fdf8] p-5 rounded-lg text-center'>
                                <p className='text-primary'>{t('TravelerReports12')}</p>
                                <h2 className='font-semibold text-primary'>{t('ReportsIt12')}</h2>
                            </div>
                        </div>

                        <button className='flex items-center justify-center gap-3 bg-primary text-white py-3 px-5 rounded-lg my-5 w-full'>{t('FindMyBuyer12')}<FaArrowRightLong className='text-2xl' /> </button>
                        <p className='text-primary text-center'>{t('MakeInaccessiblePossible12')}</p>
                    </div>
                    <div>
                        <img src="/Images/Home/home-3.png" alt="" />
                    </div>
                </div> */}

                {/* 
                <div data-aos="fade-up" data-aos-duration="500" className='grid lg:grid-cols-2 items-center gap-10 my-32'>
                    <div>
                        <h2 className='text-2xl font-semibold text-primary'>{t('faster-delivery')}</h2>
                        <p className='my-5 text-primary'>{t('benefit')}</p>

                        <div className='p-5 rounded-lg bg-[#f1fdf8]'>
                            <h2 className='text-2xl font-semibold text-primary mb-3'>{t('how-does-it-work')}</h2>
                            <p className='text-gray-500'>{t('how-it-works121')}</p>
                        </div>
                        <div className='my-5 flex items-center gap-5'>
                            <div className='bg-[#f1fdf8] p-5 rounded-lg text-center'>
                                <p className='text-primary'>{t('sending-package')}</p>
                                <h2 className='font-semibold text-primary'>{t('sending-time')}</h2>
                            </div>
                            <div>
                                <FaArrowRightLong className='text-2xl text-primary' />
                            </div>
                            <div className='bg-[#f1fdf8] p-5 rounded-lg text-center'>
                                <p className='text-primary'>{t('arrival-package')}</p>
                                <h2 className='font-semibold text-primary'>{t('arrival-time')}</h2>
                            </div>
                        </div>

                        <button className='flex items-center justify-center gap-3 bg-primary text-white py-3 px-5 rounded-lg my-5 w-full'>{t('find-carrier')}<FaArrowRightLong className='text-2xl' /> </button>
                        <p className='text-primary text-center'>{t('faster-cheaper')}</p>
                    </div>
                    <div>
                        <img src="/Images/Home/home-4.png" alt="" />
                    </div>
                </div> */}



            </div>
        </div>
    );
}

export default SiteDetails;
