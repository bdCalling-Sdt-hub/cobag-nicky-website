import React from 'react';
import { CiClock2, CiLocationOn, CiLock } from 'react-icons/ci';
import { FiMessageSquare, FiShield, FiShoppingBag, FiUserCheck } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';

const HowDoesWork = () => {
    return (
        <div className='py-32'>
            <h2 className='md:text-4xl text-3xl font-semibold text-primary text-center mb-16'>How does it work?</h2>
            <div className='lg:w-[80%] w-[90%] mx-auto  grid lg:grid-cols-4 grid-cols-1 gap-10 items-start'>
                <div className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 border-2 border-primary text-primary flex items-center justify-center rounded-lg'>
                        <IoSearchOutline className='text-2xl ' />
                    </div>
                    <h2 className=' text-xl font-semibold text-primary my-5 '>Find a courier</h2>
                    <p className='text-[#000000b2]'>Find a traveler who is going to the city where you want to shop.</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 border-2 border-primary text-primary flex items-center justify-center rounded-lg'>
                        <FiMessageSquare className='text-2xl ' />
                    </div>
                    <h2 className=' text-xl font-semibold text-primary my-5 '>Discuss the details</h2>
                    <p className='text-[#000000b2]'>Specify desired products, stores and budget via integrated messaging.</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 border-2 border-primary text-primary flex items-center justify-center rounded-lg'>
                        <FiShoppingBag className='text-2xl ' />
                    </div>
                    <h2 className=' text-xl font-semibold text-primary my-5 '>The courier does your shopping.</h2>
                    <p className='text-[#000000b2]'>The courier buys your products and carries them in his luggage.</p>
                </div>
                <div className='text-center flex flex-col items-center justify-center'>
                    <div className='w-14 h-14 border-2 border-primary text-primary flex items-center justify-center rounded-lg'>
                        <CiLocationOn className='text-2xl ' />
                    </div>
                    <h2 className=' text-xl font-semibold text-primary my-5 '>Collect your purchases</h2>
                    <p className='text-[#000000b2]'>Meet the courier at the airport or train station to collect your products.</p>
                </div>
            </div>



            <div className='lg:w-[80%] w-[90%] mx-auto pt-28'>
                <h2 className='md:text-4xl text-3xl font-semibold text-primary text-center'>The advantages of CoBag</h2>
                <p className='text-[#000000b2] text-center mt-2' >An innovative solution for your international purchases</p>
                <div className='mt-20 grid xl:grid-cols-4 md:grid-cols-2 gap-5'>
                    <div className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Ishop/card-icon-1.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>Fast delivery</h2>
                        <p>Receive your purchases in a few hours, the time of a flight</p>
                    </div>
                    <div className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Ishop/card-icon-2.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>Great price</h2>
                        <p>Save on international shipping costs</p>
                    </div>
                    <div className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Ishop/card-icon-3.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>Global Access</h2>
                        <p>Buy products from all over the world, even those not delivered to in your country.</p>
                    </div>
                    <div className='shadow-lg rounded-lg p-10'>
                        <img src="/Images/Ishop/card-icon-4.png" alt="" />
                        <h2 className='text-primary text-xl font-semibold my-5'>Safety guaranteed</h2>
                        <p>Secure payment and verified couriers</p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default HowDoesWork;