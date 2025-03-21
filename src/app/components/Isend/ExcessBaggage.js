import Aos from 'aos';
import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import { PiAirplaneTilt } from 'react-icons/pi';

const ExcessBaggage = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animations trigger only once
        });
    }, []);

    return (
        <div className='lg:w-[80%] w-[90%] mx-auto '>

            <div data-aos="fade-up" data-aos-duration="500" className='lg:my-32 my-20 grid lg:grid-cols-2 gap-10 items-center'>
                <div>
                    <h2 className='md:text-4xl text-2xl font-semibold text-primary'>Excess baggage fees will never scare you again
                    </h2>
                    <p className='my-5 md:text-2xl'>What if your excess luggage had a place in other people's suitcases? <span className='text-primary font-semibold'>Team up with another </span>CoBag traveler</p>

                    <div className='bg-[#f3fef7] p-5 rounded-lg'>
                        <h3 className='font-semibold text-2xl text-primary mb-3'>How does it work?</h3>
                        <p>Thanks to CoBag, buy the available kilos of a co-passenger on the same flight and share their suitcases to take all your luggage without leaving anything behind, at a reduced price .</p>
                    </div>

                    <div className='md:flex items-center gap-5 mt-5'>
                        <div className='bg-[#f4fcfb] p-5 rounded-lg'>
                            <h2 className='text-xl text-center'>A surplus in <br />
                                <span className='font-semibold text-primary'>your luggage?</span>
                            </h2>
                        </div>
                        <div className='flex md:block items-center justify-center gap-5'>
                            <FaArrowRight className='text-2xl md:my-0 my-5  text-primary' />
                        </div>
                        <div className='bg-[#f4fcfb] p-5 rounded-lg'>
                            <h2 className='text-xl text-center'>Use the available kilos in a person's luggage
                                <br />
                                <span className='font-semibold text-primary'>
                                    other passenger
                                </span>
                            </h2>
                        </div>
                    </div>
                    <p className='text-xl text-center text-gray-600 mt-3 '>Show solidarity with CoBag</p>



                </div>
                <div className='flex justify-end'>
                    <img className='md:w-4/5' src="/Images/NewSection/excess_luggage_CoBag.png" alt="" />
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="500" className='lg:my-32 my-20 grid lg:grid-cols-2 gap-10 items-center'>
                <div>
                    <h2 className='md:text-4xl text-2xl font-semibold text-primary'>Faster delivery than express
                    </h2>
                    <p className='my-5 md:text-2xl'>Enjoy the <span className='text-primary font-semibold'>ultra-fast speed </span>of a direct flight for your international parcel delivery. The world has never been so close.</p>

                    <div className='bg-[#f3fef7] p-5 rounded-lg'>
                        <h3 className='font-semibold text-2xl text-primary mb-3'>How does it work?</h3>
                        <p>Got an urgent international package to send? With CoBag, a traveler can load your package into their available luggage space , take it with them on their flight, and deliver it as soon as they arrive at their destination. And all this with the fastest delivery on the planet: within their flight time . 100% faster, 99% cheaper.</p>
                    </div>

                    <div className='md:flex items-center gap-5 mt-5'>
                        <div className='bg-[#f4fcfb] p-5 rounded-lg'>
                            <h2 className='text-xl text-center'>Sending the package<br />
                                <span className='font-semibold text-primary'>Paris 10:00 a.m.</span>
                            </h2>
                        </div>
                        <div className='flex md:block items-center justify-center gap-5'>
                            <FaArrowRight className='text-2xl md:my-0 my-5 text-primary' />
                        </div>
                        <div className='bg-[#f4fcfb] p-5 rounded-lg'>
                            <h2 className='text-xl text-center'>Arrival of the package
                                <br />
                                <span className='font-semibold text-primary'>
                                    Casablanca 1:00 p.m., same day
                                </span>
                            </h2>
                        </div>
                    </div>
                    <p className='text-xl text-center text-gray-600 mt-3 '>Show solidarity with CoBag</p>



                </div>
                <div className='flex justify-end'>
                    <img className='md:w-4/5' src="/Images/NewSection/send_package_CoBag.png" alt="" />
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="500" className='lg:my-32 my-20 '>
                <h2 className='md:text-xl text-center'>Examples of international shipments,<span className='text-primary font-semibold'> delivered in a few hours, the time of a flight :</span> </h2>



                <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10  text-center'>
                    <div className='hover:-mt-2 duration-500'>
                        <img className='w-full mx-auto' src="/Images/NewSection/documents10.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 justify-center font-semibold text-primary mb-3'><PiAirplaneTilt />Fastest delivery on the planet

                        </h2>
                        <p className=' text-xl font-semibold text-gray-700'>Urgent documents</p>
                    </div>
                    <div className='hover:-mt-2 duration-500'>
                        <img className='w-full mx-auto' src="/Images/NewSection/medicaments.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 justify-center font-semibold text-primary mb-3'><PiAirplaneTilt />Fastest delivery on the planet

                        </h2>
                        <p className='  text-xl font-semibold text-gray-700'>Urgent medications</p>
                    </div>
                    <div className='hover:-mt-2 duration-500'>
                        <img className='w-full mx-auto' src="/Images/NewSection/hightech.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 justify-center font-semibold text-primary mb-3'><PiAirplaneTilt />Fastest delivery on the planet
                        </h2>
                        <p className=' text-xl font-semibold text-gray-700'>High-tech to offer</p>
                    </div>
                    <div className='hover:-mt-2 duration-500'>
                        <img className='w-full mx-auto' src="/Images/NewSection/vetements.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 justify-center font-semibold text-primary mb-3'><PiAirplaneTilt />Fastest delivery on the planet

                        </h2>
                        <p className='  text-xl font-semibold text-gray-700'>Gifts for special occasions</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default ExcessBaggage;
