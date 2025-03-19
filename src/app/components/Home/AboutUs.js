import i18n from '@/app/utils/i18';
import Aos from 'aos';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { FaArrowRight } from "react-icons/fa6";
import { SlPlane } from "react-icons/sl";



const AboutUs = () => {


    const { t } = i18n;


    useEffect(() => {
        Aos.init({
            duration: 1000, // Animation duration in milliseconds
            once: true, // Animations trigger only once
        });
    }, []);



    return (
        <div className='my-20'>
            <section data-aos="fade-up" className='w-[70%] mx-auto'>
                <h2 className='md:text-4xl text-3xl font-semibold text-primary text-center mb-5'>CoBag is also the solution for:</h2>
                <p className='text-xl text-center'>Carry your excess baggage at a discounted price, shop from around the world and send packages internationally, all with <span className='text-primary font-semibold'> the fastest delivery on the planet: one direct flight away .</span>
                </p>
                <img className='w-3/4 mx-auto' src="/Images/NewSection/solutions-1.png" alt="" />
                <button className='flex items-center justify-center gap-2 bg-primary text-white py-3 px-10 rounded-lg mx-auto my-20'> Transport my surplus at a reduced price <FaArrowRight /></button>
            </section>

            <section data-aos="fade-up" className='w-[80%] mx-auto'>
                <h2 className='text-center text-xl'>Examples of international purchases you will have in your hands <span className='text-primary font-semibold'>during a flight :</span></h2>

                <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 my-20 text-center'>
                    <div className='hover:-mt-2 duration-500'>
                        <img className='w-full mx-auto' src="/Images/NewSection/Examples-1.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 justify-center font-medium mb-3'><CiLocationOn />Asia </h2>
                        <p className='font-semibold '>Korean Skin Care Beauty Treatments</p>
                    </div>
                    <div className='hover:-mt-2 duration-500'>
                        <img className='w-full mx-auto' src="/Images/NewSection/cigarettes.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 justify-center font-medium mb-3'><CiLocationOn />Europe </h2>
                        <p className='font-semibold '>Cheaper cigarettes</p>
                    </div>
                    <div className='hover:-mt-2 duration-500'>
                        <img className='w-full mx-auto' src="/Images/NewSection/pagne.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 justify-center font-medium mb-3'><CiLocationOn />Africa </h2>
                        <p className='font-semibold '>Traditional and authentic wax fabric</p>
                    </div>
                    <div className='hover:-mt-2 duration-500'>
                        <img className='w-full mx-auto' src="/Images/NewSection/maillot.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 justify-center font-medium mb-3'><CiLocationOn />America </h2>
                        <p className='font-semibold '>Authentic NBA Jerseys</p>
                    </div>
                </div>
                <div>
                    <button className='flex items-center justify-center gap-2 bg-primary text-white py-3 px-10 rounded-lg mx-auto'>Find my buyer <FaArrowRight /></button>
                </div>
            </section>

            <section data-aos="fade-up" className='w-[80%] mx-auto my-20'>
                <h2 className='text-center text-xl'>Examples of international shipments, <span className='text-primary font-semibold'>delivered during a flight :</span></h2>

                <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-10 my-20 text-center'>
                    <div className='hover:-mt-2 duration-500'>
                        <img className='w-full mx-auto' src="/Images/NewSection/documents-1.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 justify-center font-medium mb-3'><SlPlane />Fastest delivery on the planet
                        </h2>
                        <p className='font-semibold '>Urgent documents</p>
                    </div>
                    <div className='hover:-mt-2 duration-500'>
                        <img className='w-full mx-auto' src="/Images/NewSection/documents-2.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 justify-center font-medium mb-3'><SlPlane />Fastest delivery on the planet
                        </h2>
                        <p className='font-semibold '>Urgent medications</p>
                    </div>
                    <div className='hover:-mt-2 duration-500'>
                        <img className='w-full mx-auto' src="/Images/NewSection/documents-3.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 justify-center font-medium mb-3'><SlPlane />Fastest delivery on the planet
                        </h2>
                        <p className='font-semibold '>High-tech to offer</p>
                    </div>
                    <div className='hover:-mt-2 duration-500'>
                        <img className='w-full mx-auto' src="/Images/NewSection/documents-4.png" alt="" />
                        <h2 className='mt-5 flex items-center gap-2 justify-center font-medium mb-3'><SlPlane />Fastest delivery on the planet
                        </h2>
                        <p className='font-semibold '>Gifts for special occasions</p>
                    </div>
                </div>
                <div>
                    <button className='flex items-center justify-center gap-2 bg-primary text-white py-3 px-10 rounded-lg mx-auto'>Find my buyer <FaArrowRight /></button>
                </div>
            </section>

            <div className='bg-gradient-to-t from-[#ffffff] via-[#9affcc] to-[#ffffff1a]'>
                <section data-aos="fade-up" className='w-[80%] mx-auto py-20'>
                    <h2 className='text-center text-3xl font-semibold text-primary'>CoBag: An ecological revolution in transport</h2>
                    <p className='mb-10 mt-3 w-3/4 mx-auto text-center text-xl'>Every day, <span className='font-semibold text-primary '>13.7 million people travel by plane around the world</span> , and <span className='font-semibold text-primary'>67.2 million kilos of their luggage go unused .</span> With CoBag, these lost kilos become a valuable resource, drastically reducing CO₂ emissions.
                    </p>

                    <img className='w-2/4 mx-auto' src="/Images/NewSection/ecolo.png" alt="" />
                    <div className='text-center space-y-3'>
                        <h3 className='font-semibold text-center'>🌍 92 million tonnes of CO₂ saved per year, the equivalent of 20 million fewer cars on the roads.</h3>
                        <h2>🌱 An alternative to air freight that avoids 252 million kg of CO₂ per day .</h2>
                        <h2>💰 A market with high potential: €122.6 billion in annual savings for CoBag users by optimizing this wasted space.</h2>
                        <h2> 100% greener, 100% faster, 100% baggage refunded, 99% cheaper</h2>
                        <br />
                        <h2 className='font-semibold mt-10 text-xl text-primary'> CoBag is:</h2>
                        <h2> ✅ An ecological and economical alternative</h2>
                        <h2> ✅ A fast and secure solution</h2>
                        <h2> ✅ An opportunity for all travelers </h2>
                    </div>
                </section>
            </div>

        </div>

    );
}

export default AboutUs;
