'use client';
import { useGetPostQuery } from '@/app/redux/Features/getProfile';
import i18n from '@/app/utils/i18';
import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { GoShieldCheck } from 'react-icons/go';

const SiteDetails = () => {
    const {t} = i18n;


    const { data } = useGetPostQuery();
    console.log(data);


    

    return (
        <div >

            <div className='flex flex-col items-center justify-center gap-5 py-20 bg-[#f9fafb]'>
                <h1 className='md:text-4xl text-3xl font-semibold text-primary text-center'><span className='block leading-[1.5]'>{t('SiteYouKnow')} <br /></span> {t('SiteCARPOOLING')} <span className='text-[#0b2f9f]'>{t('SiteCOLOCATION')}</span> <span className='text-[#2563eb]'>{t('SiteCOWORKING')}</span></h1>
                <p className='text-base font-semibold text-gray-500'>and now ...</p>
                <div data-aos="zoom-out-up" data-aos-duration="900" className='flex items-center justify-center gap-5'>
                    <img data-aos="flip-right" data-aos-duration="900" className='w-72 my-5' src="/Images/logo.svg" alt="" />
                </div>
                <h2>{t('SiteCObagSharing')} <span className='font-semibold text-primary'>Sharing</span></h2>
                <h2>{t('SiteCObagSharingwhat')}<span className='font-semibold text-primary'>Sharing luggage</span></h2>
            </div>
            <div>

            </div>

            {/*=========== cards ============ */}

            <div className='lg:w-[60%] w-[90%] mx-auto'>
                <div data-aos="fade-up" data-aos-duration="500" className='grid lg:grid-cols-2 items-center gap-10 my-32'>
                    <div>
                        <h2 className='text-2xl font-semibold text-primary'>{t('CoBagreimbursesyourluggage')}</h2>
                        <p className='my-5'>{t('Resellyour')} <span className='font-semibold text-primary '>{t('unusedkilos')}</span> {t('inyoursuitcasesand')} <span className='text-blue-600'>{t('earnmoney')}</span>{t('oneveryplaneortraintrip')}</p>
                        <div className='p-5 rounded-lg bg-[#f1fdf8]'>
                            <h2 className='text-2xl font-semibold text-primary mb-3'>{t('WhodoIsellto')}</h2>
                            <p className='text-gray-500'>{t('TootherCoBagusers')}</p>
                        </div>
                        <button className='flex items-center justify-center gap-3 bg-primary text-white py-3 px-5 rounded-lg my-5 w-full'>{t('Sellmyunusedkilos')} <FaArrowRightLong className='text-2xl' /> </button>
                        <p className='text-primary'>{t('ResellyourunusedkilosCoBag')}</p>
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
                        <h2 className='font-semibold mb-2 text-primary text-xl'>{t('YourluggageishighlysafewithCobag')}</h2>
                        <p className='text-gray-500'>{t('TravelwithpeaceofmindwithCobag')}</p>
                    </div>
                </div>

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
                </div>




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
                </div>



            </div>
        </div>
    );
}

export default SiteDetails;
