import React from 'react';
import { FaArrowRight } from "react-icons/fa6";


const AboutUs = () => {
    return (
        <div className='py-20 bg-[#f7f7fc]'>
            <h2 data-aos="fade-up" data-aos-duration="300" className='text-center md:text-5xl text-3xl text-primary font-semibold'>Who can I sell my unused kilos to?</h2>
            <div className='flex justify-center items-center flex-wrap mt-10 gap-10 md:px-0 px-5'>

                <div data-aos="fade-up" data-aos-duration="500" className="w-[100%] md:w-[500px] relative overflow-hidden rounded-xl bg-white">
                    {/* Image with Overlay */}
                    <div className="relative overflow-hidden">
                        {/* Image */}
                        <img
                            className="w-full h-full object-cover"
                            src="/Images/Landingpage/home_about.jpg"
                            alt="Delivery"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#0000004f]"></div>
                        {/* Text */}
                        <p className="bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] p-2 text-primary font-semibold absolute top-0 right-0 text-xs md:text-sm">
                            The fastest international delivery in the world
                        </p>
                    </div>

                    <div className='p-5'>
                        <h3 className='text-primary font-semibold text-xl'>For those who want to send parcels worldwide with lightning delivery.</h3>
                        <p className='my-10'>By selling your unused kilos, users can ship their parcels as fast as the duration of your flight. Say goodbye to endless postal delays: with Cobag, you become the immediate solution for express and reliable deliveries across the globe.</p>
                        <button className='bg-[#e7e8f0] py-3 px-8 rounded-xl text-primary flex items-center justify-center gap-2'>Learn more <FaArrowRight /></button>
                    </div>



                </div>

                <div data-aos="fade-up" data-aos-duration="800" className="w-[100%] md:w-[500px] relative overflow-hidden rounded-xl bg-white">
                    {/* Image with Overlay */}
                    <div className="relative overflow-hidden">
                        {/* Image */}
                        <img
                            className="w-full h-full object-cover"
                            src="/Images/Landingpage/home_about.jpg"
                            alt="Delivery"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-[#0000004f]"></div>
                        {/* Text */}
                        <p className="bg-gradient-to-r from-[#98DED9] to-[#C7FFD8] p-2 text-primary font-semibold absolute top-0 right-0 text-xs md:text-sm">
                            Unique and revolutionary worldwide
                        </p>
                    </div>

                    <div className='p-5'>
                        <h3 className='text-primary font-semibold text-xl'>For those who wish to purchase rare products abroad</h3>
                        <p className='my-10'>Unobtainable products , limited editions , local exclusives : your journeys become their direct access. You buy for them the products they cannot get at home. With Cobag, you make the inaccessible possible</p>
                        <button className='bg-[#e7e8f0] py-3 px-8 rounded-xl text-primary flex items-center justify-center gap-2'>Learn more <FaArrowRight /></button>
                    </div>



                </div>

            </div>
        </div>
    );
}

export default AboutUs;
